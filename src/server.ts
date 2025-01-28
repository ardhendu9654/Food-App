import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';

import { dbConnect } from "./configs/database.config";
import { sample_foods, sample_tags, sample_users } from "./data";
import { FoodModel } from "./models/food.model";
import { User, UserModel } from "./models/user.model";
import orderRouter from "./routers/order.router";
import router from "./routers/order.router";

dotenv.config();
const port = 5000;
const jwtSecret = process.env.JWT_SECRET || "someRandomText";
dbConnect();

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use(express.json());
app.use("/api/orders", orderRouter) 


app.get('/seed', asyncHandler(
    async (req, res) => {
        const foodsCount = await FoodModel.countDocuments();
        if (foodsCount > 0) {
            res.send('Seed is already done!');
            return;
        }
        await FoodModel.create(sample_foods);
        res.send("seed is Done");
    }));

app.get('/seed1', asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send('Seed is already done!');
            return;
        }
        await UserModel.create(sample_users);
        res.send("seed is Done");
    }));


app.get('/api/foods', asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find();
        res.send(foods);
    }));

app.get('/api/foods/tags', asyncHandler(
    async (req, res) => {
        const tags = await FoodModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({ count: -1 });

        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }));

app.get('/api/foods/tag/:tagName', asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find({ tags: req.params.tagName })
        res.send(foods);
    }));

app.get('/api/foods/:foodId', asyncHandler(
    async (req, res) => {
        const foodId = req.params.foodId;
        const foods = await FoodModel.findById(foodId);
        res.send(foods);
    }));

app.get('/api/foods/search/:searchTerm', asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } })
    res.send(foods)
}));

app.post('/api/users/login', async(req, res) => {
    const { Username, Password } = req.body;
    const user = await UserModel.findOne({Username});

    if (user && (await bcrypt.compare(Password,user.Password))) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("username and password not valid");
    }
})

app.post('/api/users/register', async(req, res) => {
    const { Username, Email, Mobile, address, Password} = req.body;
    const user = await UserModel.findOne({Email});

    if (user) {
        res.status(400).send("User Is already exist");
        return;
    }

    const encryptedPassword = await bcrypt.hash(Password,10);

    const newUser:User = {
        id:'',
        Username,
        Email:Email.toLowerCase(),
        Mobile,
        address,
        Password: encryptedPassword,
        isAdmin: false
    }
    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));
})

const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        id: user.id, Username: user.Username, isAdmin: user.isAdmin
    }, "someRandomText", {
        expiresIn: "30d"
    });

    return {
      id: user.id,
      email: user.Email,
      Username: user.Username,
      Password: user.Password,
      address: user.address,
      token: token
    };
    // user.token = token
    // return user;
}



export default router;


app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})
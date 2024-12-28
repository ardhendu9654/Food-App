const express = require('express');
const User = require('../src/app/Models/loginmodel')
const path = require('path');
require('./DbConnect');
const app = express();
const cors = require('cors');
const registerUser = require('../src/app/Models/registermodel');
const Food = require('../src/app/Models/foodmodel');
const port = process.env.PORT || 4500;
const static_path = path.join(__dirname, "../src/app/components/login")


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path));


app.get('/foods',async(req,res)=>{
  const foodData =await Food.find();
  console.log(foodData);
  res.status(200).json(foodData);
})

app.post('/login', async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const regUser = await registerUser.findOne({Username});
    if(!regUser){
      return res.status(404).json({ message: 'User not found' });
    }
    if(regUser.Password !== Password){
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', Username, userId:regUser._id });
  } catch (error) {
    console.error('Error updating or creating user:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/register', async (req, res) => {
  const { Username, Email, Mobile, Password } = req.body;

  try {
    const existingUser = await registerUser.findOne({ Username });
    if (!existingUser) {
      const newUser = new registerUser({Username, Email, Mobile, Password});
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    }
    else {
      res.status(400).json({ message: 'User already exists' });
    }
  }
  catch (error) {
    console.error('Error handling login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  
})

app.listen(port, () => {
  console.log('server is running');
});
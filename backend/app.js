const express = require('express');
const User = require('../src/app/Models/loginmodel')
// const path = require('path');
require('./DbConnect');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4500;
// const static_path = path.join(__dirname, "../src/app/components/login")


app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(static_path));


app.post('/login', async(req, res) => {
  const { Username, Password } = req.body; 
  console.log('Username:', Username);
  console.log('Password:', Password);

  try {
    const existingUser = await User.findOne({ Username });

    if (!existingUser) {
      const newUser = new User({ Username, Password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    }
  } catch (error) {
    console.error('Error updating or creating user:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log('server is running');
});
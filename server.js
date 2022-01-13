require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users, posts } = require('./mockData');

const app = express();
const PORT = 9000;

app.use(express.static('src'));
app.use(express.json());
app.use(cookieParser());

// middleware
const auth = (req, res, next) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    next();
  } catch (e) {
    return res.redirect('/signin');
  }
};

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, './build/signin.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './build/signup.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

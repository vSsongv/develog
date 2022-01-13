require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users, posts } = require('./mockData');

let postNumForMain = 0;

posts.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));

const app = express();
const PORT = 9000;

app.use(express.static('build'));
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

app.get('/posts', (req, res) => {
  let splitedPosts = [];
  for (let i = postNumForMain; i < postNumForMain + 10; i++) {
    const user = users.filter(user => user.userId === posts[i].userId)[0];
    posts[i] = { ...posts[i], userProfile: user.avartarUrl, nickname: user.nickname };
    splitedPosts = [...splitedPosts, posts[i]];
  }
  postNumForMain += 10;
  res.send(splitedPosts);
});

app.get('/*', async (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users, posts } = require('./mockData.js');

const postNumForMain = 0;

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
    console.error(e);
    return window.history.pushState(null, null, '/signin');
  }
};

app.get('/checkAuth', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    res.send(users.find(user => user.email === decoded.email));
  } catch (e) {
    res.send();
    return window.history.pushState(null, null, '/');
  }
});

const createToken = (email, expirePeriod) =>
  jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: expirePeriod,
    }
  );

// window.history.pushState({ data: 'post' }, '', '/detail');

// 로그인
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send({
      error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.',
    });
  }

  const user = users.find(user => email === user.email && password === user.password); // bcrypt.compareSync(password, user.password)

  if (!user) {
    return res.status(401).send({
      error: '등록되지 않은 사용자입니다.',
    });
  }

  res.cookie('accessToken', createToken(email, '7d'), {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  const _id = user.id;

  res.send({
    _id,
  });
});

app.get('/mypage', (req, res) => {
  alert('success!');
});

// 로그아웃
app.get('/logout', (req, res) => {
  res.clearCookie('accessToken').sendStatus(204);
});

// 회원가입
app.post('/signup', (req, res) => {
  users = [
    ...users,
    {
      email: req.body.email,
      password: req.body.password, // 암호화된 비밀번호로 변경
    },
  ];
  res.send(users);
});

// 중복확인(이메일, 닉네임)
app.get('/check/email/:email', (req, res) => {
  const { email } = req.params;
  const user = users.find(user => user.email === email);
  const isDuplicate = !!user;

  res.send({
    isDuplicate,
  });
});

app.get('/check/nickname/:nickname', (req, res) => {
  const { nickname } = req.params;
  const user = users.find(user => user.nickname === nickname);
  const isDuplicate = !!user;

  res.send({
    isDuplicate,
  });
});

// _id 생성(user, post)
app.get('/users/createId', (req, res) => {
  const maxId = Math.max(...users.map(user => user.id), 0) + 1;

  res.send({
    maxId,
  });
});

app.get('/posts/init', (req, res) => {
  let splitedPosts = [];
  for (let i = 0; i < 10; i++) {
    const user = users.filter(user => user.userId === posts[i].userId)[0];
    posts[i] = { ...posts[i], userProfile: user.avartarUrl, nickname: user.nickname };
    splitedPosts = [...splitedPosts, posts[i]];
  }
  res.send(splitedPosts);
});

app.get('/*', async (req, res) => {
  await res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

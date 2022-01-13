require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 9000;

app.use(express.static('src'));
app.use(express.json());
app.use(cookieParser());

// middleware
// const auth = (req, res, next) => {
//   const accessToken = req.headers.authorization || req.cookies.accessToken;
//   try {
//     jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
//     next();
//   } catch (e) {
//     return res.redirect('/signin');
//   }
// };

// 로그인
// post('/signin', (req, res) => {
//   const {
//     email,
//     password
//   } = req.body;

//   if (!email || !password) {
//     return res.status(401).send({
//       error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.',
//     });
//   }

//   const user = users.find(user => email === user.email && bcrypt.compareSync(password, user.password))

//   if (!user) {
//     return res.status(401).send({
//       error: '등록되지 않은 사용자입니다.',
//     });
//   }

//   res.cookie('accessToken', createToken(email, '7d'), {
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     httpOnly: true
//   });
//   res.send({
//     _id
//   });
// })

// // 로그아웃
// get('logout', (req, res) => {
//   res.clearCookie('accessToken').sendStatus(204);
// })

// 회원가입
// post('/signup', (req, res) => {
//   users = [...users, {
//     email: req.body.email,
//     password: 암호화된 비밀번호
//   }]
//   res.send(users) // 굳이 users를 보낼 필요가 있을까?
// })

// 중복확인 (이메일, 닉네임)
// get('/check/email/:email', (req, res) => {
//   const {
//     email
//   } = req.params;
//   const user = users.find(user => user.email === email);
//   const inDuplicate = !!user;

//   res.send({
//     isDulicate
//   });
// })
// get('/check/nickname/:nickname', (req, res) => {
//   const {
//     nickname
//   } = req.params;
//   const user = users.find(user => user.nickname === nickname);
//   const inDuplicate = !!user;

//   res.send({
//     isDulicate
//   });
// })

// _id 생성 (user, post)
// get('/users', (req, res) => {
//   const maxId = Math.max(...users.map(user => user.id), 0) + 1;

//   res.send({
//     maxId
//   });
// })
// middleware (토큰 여부로 페이지 튕기기)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
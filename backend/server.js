require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
let users = require('./data/users');
let posts = require('./data/posts');

let leftPostNum = posts.length - 10;
let postIndex = 9;
let leftUserPostNum = 0;
let userPostIndex = 0;

posts.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));

const makeSplitedPosts = (posts, startIdx, endIdx) => {
  let splitedPosts = [];

  for (let i = startIdx; i < endIdx; i++) {
    const user = users.filter(user => user.userId === posts[i].userId)[0];
    posts[i] = {
      ...posts[i],
      userProfile: user.avatarUrl,
      nickname: user.nickname,
    };
    splitedPosts = [...splitedPosts, posts[i]];
  }

  return splitedPosts;
};

const app = express();
const PORT = 9000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'src/assets/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// middleware
const auth = (req, res, next) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    next();
  } catch (e) {
    console.error(e);
  }
};

app.get('/checkAuth', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    res.send(users.find(user => user.userId === decoded.userId));
  } catch (e) {
    res.send();
  }
});

const createToken = (userId, expirePeriod) =>
  jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: expirePeriod,
    }
  );

// 로그인
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send({
      error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.',
    });
  }

  const user = users.find(user => email === user.email && bcrypt.compareSync(password, user.password));

  if (!user) {
    return res.status(401).send({
      error: '등록되지 않은 사용자입니다.',
    });
  }

  res.cookie('accessToken', createToken(user.userId, '7d'), {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  const _id = user.userId;

  res.send({
    _id,
  });
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
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
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
  const maxId = Math.max(...users.map(user => user.userId), 0) + 1;

  res.send({
    maxId,
  });
});

// 검색
app.get('/search?title=:searchInput', (req, res) => {
  const { searchInput } = req.params;
  const filterPosts = posts.filter(post => post.title.includes(searchInput));
  res.send(makeSplitedPosts(filterPosts, 0, filterPosts.length));
});

// 메인화면 초기 렌더링
app.get('/posts/init', (req, res) => {
  leftPostNum = posts.length - 10;
  postIndex = 9;
  res.send(makeSplitedPosts(posts, 0, 10));
});

// 메인화면 더보기 버튼 클릭
app.get('/posts', (req, res) => {
  if (leftPostNum >= 10) {
    leftPostNum -= 10;
    res.send(makeSplitedPosts(posts, postIndex, 10 + postIndex));
    postIndex += 10;
  } else {
    res.send(makeSplitedPosts(posts, postIndex, leftPostNum + postIndex));
    leftPostNum = 0;
  }
});

app.get('/develog/:userId/popularposts', (req, res) => {
  let { userId } = req.params;
  userId = Number(userId);
  const userPost = posts.filter(post => post.userId === userId);
  leftUserPostNum = 0;
  userPostIndex = 0;
  userPost.sort((a, b) => b.likedUsers.length - a.likedUsers.length);
  let popularUserPost = [];
  for (let i = 0; i < 3; i++) {
    popularUserPost = [...popularUserPost, userPost[i]];
  }
  res.send(popularUserPost);
});

app.get('/develog/:userId/posts', (req, res) => {
  let { userId } = req.params;
  userId = Number(userId);
  const userPost = posts.filter(post => post.userId === userId);
  const userPostLen = userPost.length;
  if (leftUserPostNum === 0) {
    res.send(makeSplitedPosts(userPost, userPostIndex, userPostLen > 8 ? 8 : userPostLen));
    leftUserPostNum = userPostLen > 8 ? userPost.length - 8 : 0;
    userPostIndex += 7;
  } else if (leftUserPostNum > 8) {
    res.send(makeSplitedPosts(userPost, userPostIndex, 8 + userPostIndex));
    leftUserPostNum -= 8;
    userPostIndex += 7;
  } else {
    res.send(makeSplitedPosts(userPost, userPostIndex, leftUserPostNum + userPostIndex));
    leftUserPostNum = 0;
  }
});

app.post('/uploadImage', upload.single('selectImage'), (req, res) => {
  res.send(req.files);
});

app.patch('/editUser/:userId', (req, res) => {
  const { userId } = req.params;
  users = users.map(user =>
    user.userId === +userId
      ? {
          ...user,
          ...req.body,
        }
      : user
  );
  res.sendStatus();
});

app.get('/src/assets/:imageUrl', (req, res) => {
  const img = req.params.imageUrl;
  res.sendFile(path.join(__dirname, `./src/assets/${img}`));
});

// avatar 불러오기
app.get('/avatar/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.userId === +userId);
  res.sendFile(path.join(__dirname, `${user.avatarUrl}`));
});

app.post('/checkPassword/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.userId === +userId);

  if (bcrypt.compareSync(req.body.password, user.password)) res.sendStatus(204);
  else res.send('failed');
});

// 유저 탈퇴
app.post('/delete/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.userId === +userId);

  if (bcrypt.compareSync(req.body.password, user.password)) {
    users = users.filter(user => user.userId !== +userId);
    posts = posts.filter(post => post.userId !== +userId);
    res.clearCookie('accessToken').sendStatus(204);
  } else {
    res.send('failed');
  }
});

// detail page
app.get('/posts/:postid', (req, res) => {
  const { postid } = req.params;
  const post = posts.find(elem => elem.postId === +postid);
  const user = users.find(user => user.userId === +post.userId);
  res.send({
    post,
    user,
  });
});

app.get('/src/assets/:imageUrl', (req, res) => {
  const img = req.params.imageUrl;
  // console.log('img: ', img);
  res.sendFile(path.join(__dirname, `./src/assets/${img}`));
});

app.patch('/posts/likedUsers', (req, res) => {
  const { userId, isEmptyHeart } = req.body;
  // console.log(userId, isEmptyHeart);
  posts = posts.map(post =>
    post.userId === userId
      ? {
          ...post,
          likedUsers: isEmptyHeart ? [...post.likedUsers, userId] : post.likedUsers.filter(id => id !== userId),
        }
      : post
  );
  // console.log(posts.find(post => post.userId === userId).likedUsers);
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  // console.log('postid: ', id);
  posts = posts.filter(post => post.postId !== +postid);
});

app.get('*', (req, res) => {
  // console.log('sendFile', req.headers.referer);
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
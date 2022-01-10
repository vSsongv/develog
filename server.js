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

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

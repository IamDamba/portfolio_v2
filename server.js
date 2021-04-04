//------------------| VARIABLE

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const firebase = require("./back/data/firebase");
const firestore = firebase.firestore();
const router = require("./back/route/authRoute");
const path = require('path');

//------------------| MIDDLEWARE

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'front/build')));

//------------------| ROUTE

app.use(router);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
});

//------------------| CONNECTION

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

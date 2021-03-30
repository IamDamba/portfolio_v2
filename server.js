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
app.use(express.static('front/build'));

//------------------| ROUTE

app.get('/*', (_, res)=>{
  res.sendFile(__dirname, 'front/build/index.html');
})
app.use(router);

//------------------| CONNECTION

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

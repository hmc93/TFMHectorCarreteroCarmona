const express = require("express");
const connectDb = require("./connection"); //poner esto para que se ejecute antes como en el ejemplo
const userRouter = require('./routers/router.user')
const terminalRouter = require('./routers/router.terminal')
const cors = require('cors');
const app = express();

let counter = 0;
const port = 80;

//Coger el port de process env port, mirar tutorial de Ocean

app.use(cors());
app.options('*', cors());
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(userRouter);
app.use(terminalRouter);


app.get("/", (req, res) => {
  console.log("Someone accessed to root directory");
  res.send("Hi!\n");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
  //Connect to Mongo Database
  connectDb().then(() => {
  console.log("MongoDb connected");
  }).catch(e => {
  console.log("Unable to connect to MongoDB");
  console.log(e);
  });
});

/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */

// handle 404 errors
app.use(function (req, res) {
  res.status(404).send('Not found');
});


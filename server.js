

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

app.use(cookieParser())

const port = 3001

const clientOrigin = 'http://localhost:3000';

const corsOptions = {
  origin: clientOrigin,
  exposedHeaders: ['origin', 'cookie', 'set-cookie'],
  allowedHeaders: ['csrf-token', 'origin', 'cookie', 'set-cookie', 'Content-Type'],
  methods: ['GET'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Server app')
})

app.get('/get-cookie', (req, res) => {
  res.cookie('SESSION_ID', '5555555555555555555555555555555555555');
  res.redirect(clientOrigin)
})

app.get('/say-hello', (req, res) => {
  if (req.cookies['SESSION_ID']) {
    res.send(`Ok, hello, you are ${req.cookies['SESSION_ID']}`);
  } else {
    res.send('Sorry, I don\'t know you');
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
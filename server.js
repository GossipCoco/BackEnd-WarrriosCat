const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4047;
const http = require('http')
const app = express();
const helmet = require("helmet")
const SocketIOController = require('./app/controllers/SocketIOController')
const multer = require('multer');
const upload = multer();
require('dotenv').config();

const Home = require('./app/Routes/Home')

const corsOptions = {
    // origin: '*',
    origin: [
      'http://localhost:8081',
      'http://192.168.1.14:8081'
    ],
    cors: {
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true
    }
  }
app
    .use('*',cors(corsOptions))
    .use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
    .use(express.json())
    .use(bodyParser.json({ limit: '100mb', extended: true }))
    .use(express.urlencoded({ extended: true }))
    .use(helmet())
    .use('/Home', Home)
    .use(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send({ result: 'error' });
      })

const serv = http.createServer( app);
    serv.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server is running securely on port ${PORT}.`);
    }
    SocketIOController(serv, corsOptions)
    console.log(`Server is running on port ${PORT}.`);
});
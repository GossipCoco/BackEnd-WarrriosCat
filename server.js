const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 4047;
const http = require('http')
const app = express();
const helmet = require("helmet")
const SocketIOController = require('./app/controllers/socketIOController')
const multer = require('multer');
const upload = multer();

const Home = require('./app/Routes/Home')
const User = require('./app/Routes/User')
const Character = require('./app/Routes/character')
const Clan = require('./app/Routes/clan')
const Grade = require('./app/Routes/grade')
const Image = require('./app/Routes/image')
const Game = require('./app/Routes/Game')
const Fiction = require('./app/Routes/fiction')
const chatgptRouter = require('./app/Routes/chatgpt');
const Event = require('./app/Routes/event')
const Quest = require('./app/Routes/quest')
const imagegenRouter  = require('./app/Routes/imagegen');
const ArcBook = require('./app/Routes/ArcBook')
const Rating = require('./app/Routes/Rating')
const Chapter = require('./app/Routes/Chapter')
const Message = require('./app/Routes/Message')
const Kind = require('./app/Routes/Kind')
const corsOptions = {
    // origin: '*',
    origin: [
      'http://localhost:8081',
      'http://192.168.1.12:8081',
      'http://192.168.1.23:8081',
      'http://192.168.1.22:8081',
      'http://192.168.1.20:8081',
      "http://10.117.60.52"
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
  // .use(limiter)
  .use('/Home', Home)
  .use('/quest', Quest)
  .use('/character', Character)
  .use('/clan', Clan)
  .use('/grade', Grade)
  .use('/image', Image)
  .use('/game', Game)
  .use('/fiction', Fiction)
  .use('/api', chatgptRouter)
  .use('/api', imagegenRouter)
  .use('/event', Event)
  .use('/user', User)
  .use('/ArcBook', ArcBook)
  .use('/chapter', Chapter)
  .use('/rating', Rating)
  .use('/message', Message)
  .use('/Kind', Kind)
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
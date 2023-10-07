require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const userroutes = require('./routes/authRoutes.js');
const connectDb = require('./config/userDb.js');


connectDb();


app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const staticPath = path.join(__dirname, '../client');
app.use(express.static(staticPath));


app.use(cookieParser());


app.use('/', userroutes);

module.exports=app;
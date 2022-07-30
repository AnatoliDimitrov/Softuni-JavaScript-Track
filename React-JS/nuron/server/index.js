const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");

const allowed = ['.js', '.css', '.png', '.jpg', '.jpeg', '.ico'];
const whitelist = ['http://localhost:*'];

const router = require('./routes');
const { databaseInitialize } = require('./config/database');
const { PORT } = require('./config/environment');
const { authentication } = require('./middlewares/userMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(errorHandler);
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
});

app.get('*', function (req, res) {
    res.json({ error: '404' });
});

databaseInitialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}...`)
        });
    })
    .catch((e) => {
        console.log(e);
    });
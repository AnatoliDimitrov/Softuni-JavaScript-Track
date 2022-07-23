require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");

const db = require('./config/db');
const { port, dbConnection } = require('./config/config');

const allowed = ['.js', '.css', '.png', '.jpg', '.jpeg', '.ico'];

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const start = async () => {
  try {
    await db(dbConnection);
    require('./config/express')(app, express);
    require('./routes/router')(app);

    app.get('*', (req, res) => {
      if (allowed.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`public/${req.url}`));
      } else {
        res.sendFile(path.join(__dirname, 'public/index.html'));
      }
    });
    console.log('*** >>> Database is connected <<< ***');
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.error('!!! >>> Database is not connected <<< !!!\nError:', error.message);
  }
};
start();

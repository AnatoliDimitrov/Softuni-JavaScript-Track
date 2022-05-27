const express = require("express");
const handlebars = require("express-handlebars");
const {catMiddleware} = require('./middlewares');
const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.use('/content', express.static('content'));

app.set('view engine', 'hbs');

app.get("/", catMiddleware, (req, res) =>{
    if(req.accepts.length != 0){

    }
    res.render('home', {cats: req.cats});
});

app.listen(port, () => {
    console.log(`Cat-Shelter app listening on port ${port}`)
  });
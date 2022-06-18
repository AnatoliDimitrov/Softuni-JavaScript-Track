const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const { databaseInitialize } = require('./config/database');
const { PORT } = require('./config/environment');
const {authentication} = require('./middlewares/userMiddleware');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(authentication);
app.use(router);

app.get('*', function (req, res) {
    res.status(404).render('home/404');
});


app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

databaseInitialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}...`)
        });
    })
    .catch((e) => {
        console.log(e);
    });
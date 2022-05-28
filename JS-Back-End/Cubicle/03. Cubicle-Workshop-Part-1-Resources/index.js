const express = require("express");
const handlebars = require("express-handlebars");
const routes = require('./config/routes');

const app = express();
const port = 5000;


app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`Server listening on port: ${port}...`)
});
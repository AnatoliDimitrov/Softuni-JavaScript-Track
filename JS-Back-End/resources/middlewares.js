const fs = require('fs');

let cats = JSON.parse(fs.readFileSync('./cats.json'));

exports.catMiddleware = (req, res, next) => {
    req.cats = cats;

    next();
}
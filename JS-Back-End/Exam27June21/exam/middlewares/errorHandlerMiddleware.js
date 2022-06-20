exports.errorHandler = (err, req, res, next) => {
    const status = err.status || 404;
    res.status(status).render('home/404', { error: getMessage(err) });
}

const getMessage = (err) => {
    console.log(err)
    return err.message;
}
exports.formatter = (req, res, next) => {
    req.body.name = req.body.name.trim()
    req.body.email = req.body.email.trim()
    req.body.password = req.body.password.trim()
    next();
}
module.exports = function () {

    return function loggedIn(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/login');
        }
    }
};
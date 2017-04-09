module.exports = function () {

    return function (req, res, next) {
        req.tpl.user = req.session.user;
        return next();
    };
};
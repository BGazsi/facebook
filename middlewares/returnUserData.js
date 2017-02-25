module.exports = function () {

    return function (req, res, next) {
        res.tpl.user = {
            name: 'Bence Gazsi',
            shortName: 'Bence',
            img: '/public/images/user1.jpg'
        };
        return next();
    };
};
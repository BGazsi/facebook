var generatePostsMW = require('../middlewares/generatePosts');
var returnUserDataMW = require('../middlewares/returnUserData');
var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    app.use('/home',
        function(req, res, next) {
            return !req.session.user ? res.redirect('/login') : next();
        },
        generatePostsMW(),
        returnUserDataMW(),
        renderTemplateMW('index')
    );

    app.get('/login',
        renderTemplateMW('login')
    );

    app.use('/', function(req, res, next) {
        req.session.user ? res.redirect('/home') : res.redirect('/login');
        return next();
    });
};
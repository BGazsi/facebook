var userModel = require('../models/users');
var postModel = require('../models/posts');

var generatePostsMW = require('../middlewares/generatePosts');
var getAllPostsMW = require('../middlewares/getAllPosts');
var returnUserDataMW = require('../middlewares/returnUserData');
var createPostMW = require('../middlewares/createPost');
var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    var objectRepository = {
        'userModel': userModel,
        'postModel': postModel
    };

    //todo: passport login check
    app.use('/home',
        function(req, res, next) {
            return !req.session.user ? res.redirect('/login') : next();
        },
        generatePostsMW(objectRepository),
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

    app.post('/new-post',
        createPostMW(objectRepository),
        getAllPostsMW(objectRepository),
        renderTemplateMW('index')
    );
};
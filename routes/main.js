var userModel = require('../models/users');
var postModel = require('../models/posts');

var generatePostsMW = require('../middlewares/generatePosts');
var getAllPostsMW = require('../middlewares/getAllPosts');
var returnUserDataMW = require('../middlewares/returnUserData');
var createPostMW = require('../middlewares/createPost');
var isLoggedInMW = require('../middlewares/isLoggedIn');
var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    var objectRepository = {
        'userModel': userModel,
        'postModel': postModel
    };

    app.use('/home',
        isLoggedInMW(),
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
        isLoggedInMW(),
        createPostMW(objectRepository),
        getAllPostsMW(objectRepository),
        renderTemplateMW('index')
    );
};
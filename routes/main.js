var generatePostsMW = require('../middlewares/generatePosts');
var returnUserDataMW = require('../middlewares/returnUserData');
var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    app.use('/',
        generatePostsMW(),
        returnUserDataMW(),
        renderTemplateMW('index')
    );
};
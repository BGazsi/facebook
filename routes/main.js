var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    app.use('/',
        renderTemplateMW('index')
    );
};
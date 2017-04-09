var requireOption = require('./common').requireOption;

module.exports = function (objectRepository) {

    var postModel = requireOption(objectRepository, 'postModel');
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        var newPost = new postModel();
        newPost.desc = req.body.desc;
        newPost.time = new Date();
        newPost.comments = [];
        userModel.findOne({
            fb_id: req.session.user.fb_id
        }, function(err, res) {
            newPost.user = res;
            newPost.save(function (err) {
                if(err) {
                    console.log(err);
                    req.tpl.error.push(err);
                }
                return next();
            });
        });
    }
};
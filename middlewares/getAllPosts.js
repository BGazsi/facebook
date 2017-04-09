var requireOption = require('./common').requireOption;
module.exports = function (objectRepository) {

    var postModel = requireOption(objectRepository, 'postModel');

    return function(req, res, next) {

        postModel.find({

        }).exec(function (err, results) {
            if (err) {
                req.tpl.error.push('Hiba a postok lekérésekor!')
            }

            req.tpl.posts = results;
            return next();
        });
    }
};
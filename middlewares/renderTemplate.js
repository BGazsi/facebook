module.exports = function (viewName) {

    return function (req, res) {

        res.render(viewName, {
            user: req.tpl.user || req.session.user,
            tpl:  req.tpl
        });
    };
};
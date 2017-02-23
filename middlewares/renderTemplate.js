module.exports = function (viewName) {

    return function (req, res) {

        res.render(viewName, {
            user: req.session.user,
            tpl:  res.tpl
        });
    };
};
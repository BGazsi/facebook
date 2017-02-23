var express = require('express');
var session = require('express-session');
var bb = require('express-busboy');

var app = express();

bb.extend(app, {
    upload: true,
    path: 'public/uploads'
});

app.set('view engine', 'ejs');
app.set('port', (5000));

app.use(session({
    name : 'sessionID',
    secret: 'y5y9YbpebpVEx0qv',
    resave: true,
    saveUninitialized: true
}));

app.use(function (req, res, next) {

    res.tpl = {};
    res.tpl.error = [];

    return next();
});

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: '706772239493804',
        clientSecret: '25326871b8d33cf3d8a02d678d8a3619',
        callbackURL: '/auth/facebook/callback',
        passReqToCallback: true
    }, function(){console.log('asd')}));


app.use('/public', express.static('public', { maxAge: 86400000 }));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/login'
        }
    ));
require('./routes/main')(app);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

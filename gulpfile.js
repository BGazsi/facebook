var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cleancss = require('gulp-clean-css');

// Compile less
gulp.task('less', function() {
    return gulp.src(['./public/src/stylesheets/style.less'])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/dist/stylesheets/'));
});

gulp.task('scripts', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/js/transition.js',
        './node_modules/bootstrap/js/dropdown.js',
        './node_modules/bootstrap/js/collapse.js',
        './node_modules/bootstrap/js/affix.js',
        './public/src/js/script.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});
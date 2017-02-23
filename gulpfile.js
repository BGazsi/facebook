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
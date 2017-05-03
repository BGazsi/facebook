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

gulp.task('sw', function() {
    return gulp.src(['./public/src/js/sw.js'])
        .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('idb', function() {
    return gulp.src(['./public/src/js/idb.js'])
        .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('store', function() {
    return gulp.src(['./public/src/js/store.js'])
        .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('scripts', ['sw', 'idb', 'store'], function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/js/transition.js',
        './node_modules/bootstrap/js/dropdown.js',
        './node_modules/bootstrap/js/collapse.js',
        './node_modules/bootstrap/js/affix.js',
        './public/src/js/idb.js',
        './public/src/js/store.js',
        './public/src/js/app.js',
        './public/src/js/script.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});
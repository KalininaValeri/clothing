var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var uglifycss = require('gulp-uglifycss');

var allJs = [
    'js/vendor/jquery-2.2.3.js',
    'js/main.js'
]

gulp.task('minify', function(){
    gulp.src(allJs)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('less', function () {
    return gulp.src('./css/style.less')
        .pipe(less())
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less', 'minify']);
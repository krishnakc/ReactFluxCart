var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var minifyCss = require('gulp-minify-css');

gulp.task('browserify', function() {
    browserify('./src/js/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
    return gulp.src('src/assets/css/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/assets'));
});
gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('default',['browserify', 'copy','minify-css'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});


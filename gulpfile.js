var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
  gulp.src('js/titleNoty.js')
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist'))
});
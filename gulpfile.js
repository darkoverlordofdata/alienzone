/**
 * Expose cake commands with gulp for use by WebStorm
 *
 */
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task(['npm run build']));
gulp.task('dist', shell.task(['npm run dist']));
gulp.task('get', shell.task(['npm run get']));
//gulp.task('publish', shell.task(['npm run publish']));
gulp.task('deploy', shell.task(['npm run deploy']));
gulp.task('serve', shell.task(['npm run serve']));
gulp.task('test', shell.task(['npm run test']));
gulp.task('make:build', shell.task(['cake make:build']));

var ghPages = require('gulp-gh-pages');

gulp.task('publish', function() {
  return gulp.src('./build/web/**/*')
    .pipe(ghPages());
});
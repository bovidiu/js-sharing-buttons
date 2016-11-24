var gulp = require('gulp');
var minify = require('gulp-minify');
var replace = require('gulp-replace');

gulp.task('default', function() {
  gulp.src('lib/SocialMedia.js')
    .pipe(replace('exports.SocialMedia', 'window.SocialMedia'))
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

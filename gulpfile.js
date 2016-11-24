var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function() {
  gulp.src('lib/SocialMedia.js')
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});
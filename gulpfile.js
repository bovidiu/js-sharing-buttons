var gulp = require('gulp');
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var typedoc = require("gulp-typedoc");

gulp.task('default',['convertTS','typedoc']);
gulp.task('convertTS', function() {
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

gulp.task("typedoc", function() {
  return gulp
    .src(["ts/**/*.ts"])
    .pipe(typedoc({
      module: "commonjs",
      target: "es5",
      out: "doc/",
      name: "Social Media Buttons"
    }))
    ;
});
var gulp = require('gulp');
var config = require('../config').vendor;

gulp.task('vendor', function() {
	console.log(config.src);
  console.log(config.dest);
  return gulp.src(config.src + '/**/*', { 'base' : 'site' })
		.pipe(gulp.dest(config.dest));
});

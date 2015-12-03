var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html', function() {
  console.log(config.src)
  console.log(config.dest)
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});

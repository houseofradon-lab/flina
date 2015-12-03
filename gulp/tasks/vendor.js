var gulp = require('gulp');
var config = require('../config').vendor;

gulp.task('vendor', function() {
	return gulp.src(config.src + '/**/*', { 'base' : 'site' })
		.pipe(gulp.dest(config.dest));
});

var gulp = require('gulp');
var config = require('../config').assets;

gulp.task('assets', function() {
	return gulp.src(config.src + '/**/*', { 'base' : 'site' })
		.pipe(gulp.dest(config.dest));
});

var gulp = require('gulp');
var connect = require('gulp-connect');
var modRewrite = require('connect-modrewrite');
var config = require('../config').server;

gulp.task('server', function() {
	// connect.server(config.settings);
	connect.server({
		root: config.settings.root,
		port: config.settings.port,
		livereload: config.settings.livereaload
	});
});

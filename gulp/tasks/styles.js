var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minifier = require('gulp-more-css');
var connect = require('gulp-connect');
var config = require('../config.js').sass;

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie 9'],
		cascade: false
	}))
	.pipe(concat('Main.css'))
	.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(minifier())
	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});

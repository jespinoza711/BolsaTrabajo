/*
* Dependencias
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify-css');


gulp.task('mincss',function(){
	gulp.src('./sources/CSS/*.css')
	.pipe(concat('default.css'))
	.pipe(minify({compatibility: 'ie8'}))
	.pipe(gulp.dest('public/stylesheets'))
});
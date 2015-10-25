var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default',function(){
	gulp.src(['./src/jquery.accordion.js'])
		.pipe(uglify())
		.pipe(rename('jquery.accordion.min.js'))
		.pipe(gulp.dest('./dist/js'));
});

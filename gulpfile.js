var gulp = require('gulp');
var ngmin = require('gulp-ngmin');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

var wpRestApiUrl = 'https://downloads.wordpress.org/plugin/rest-api.2.0-beta13.1.zip';
var sassFiles = ['backend/sass/**/*.scss', 'backend/sass/*.scss'];
var jsFiles = ['backend/javascript/module.js', 'backend/**/module.js', 'backend/javascript/*.js', 'backend/javascript/**/*.js'];

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./backend/dist/'));
});

gulp.task('scripts', function() {
	
	gulp.src(['backend/bower_components/jquery/dist/jquery.js'])
		.pipe(concat('jquery.js'))
		.pipe(gulp.dest('./backend/dist/'));

	gulp.src(['backend/bower_components/angular/angular.js'])
		.pipe(concat('angular.js'))
		.pipe(gulp.dest('./backend/dist/'));

	gulp.src(['backend/bower_components/angular-ui-router/release/angular-ui-router.js'])
		.pipe(concat('angular-ui-router.js'))
		.pipe(gulp.dest('./backend/dist/'));

	gulp.src(['backend/bower_components/angular-cookies/angular-cookies.js'])
		.pipe(concat('angular-cookies.js'))
		.pipe(gulp.dest('./backend/dist/'));

	gulp.src(['backend/bower_components/angular-bootstrap/ui-bootstrap-tpls.js'])
		.pipe(concat('angular-bootstrap.js'))
		.pipe(gulp.dest('./backend/dist/'));
		
	gulp.src(jsFiles)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./backend/dist/'));
});

gulp.task('minify', function () {
    return gulp.src('dist/app.js')
        .pipe(ngmin({dynamic: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
    gulp.watch(jsFiles,['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'minify', 'watch']);
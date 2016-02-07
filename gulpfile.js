var gulp = require('gulp'),
    useref = require('gulp-useref');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

// création d'une nouvlle tache : 'sass'
gulp.task('sass', function () {
 // définition de la tache
 gulp.src('./src/assets/scss/**/*.scss') //définition d'un répertoire source
   .pipe(sass().on('error', sass.logError)) // execution Sass
   .pipe(gulp.dest('./src/assets/css')) //écriture dans destination
   .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
 gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("./src/assets/scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('copy-angular-template', function(done) {
  gulp.src('src/assets/template/**/*')
        .pipe(gulp.dest('www/assets/template/'))
        .on('end',done);
});

gulp.task('build', ['copy-angular-template'], function() {
  return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('www'));
});

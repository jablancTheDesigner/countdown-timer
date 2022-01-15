const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
const autoprefixer = require('gulp-autoprefixer');
const stream = browserSync.stream;

gulp.task('styles', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('bundle/styles'))
        .pipe(stream());
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("styles/**/*.scss", gulp.series(['styles']));
});

gulp.task('default', gulp.series(['styles']))

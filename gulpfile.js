const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

gulp.task('styles', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('bundle/styles'))
        .pipe(browserSync.stream());
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

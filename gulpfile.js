const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp.src('scss/estilos.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
}

function watchFiles() {
    gulp.watch('scss/*.scss', css);
}

gulp.task('watch', gulp.parallel(watchFiles));
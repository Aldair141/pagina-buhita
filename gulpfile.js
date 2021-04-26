const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css_libros() {
    return gulp.src('scss/libros_gratis/libros_gratis.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
}

function css_tienda() {
    return gulp.src('scss/tienda/tienda.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
}

function watchFiles() {
    gulp.watch('scss/shared/*.scss', css_libros);
    gulp.watch('scss/libros_gratis/*.scss', css_libros);
    gulp.watch('scss/*.scss', css_libros);

    gulp.watch('scss/shared/*.scss', css_tienda);
    gulp.watch('scss/tienda/*.scss', css_tienda);
    gulp.watch('scss/*.scss', css_tienda);
}

gulp.task('watch', gulp.parallel(watchFiles));
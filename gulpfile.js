const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function compilar(ruta) {
    return gulp.src(ruta)
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
}

function css_libros() {
    return compilar('scss/libros_gratis/libros_gratis.scss');
}

function css_tienda() {
    return compilar('scss/tienda/tienda.scss');
}

function css_detalle() {
    return compilar('scss/detalle/detalle-libro.scss');
}

function css_regalar_libro() {
    return compilar('scss/regalo/regalar-libro.scss');
}

function css_regalo() {
    return compilar('scss/regalo/regalo.scss');
}

function watchFiles() {
    gulp.watch('scss/shared/*.scss', css_libros);
    gulp.watch('scss/libros_gratis/*.scss', css_libros);
    gulp.watch('scss/*.scss', css_libros);

    gulp.watch('scss/shared/*.scss', css_tienda);
    gulp.watch('scss/tienda/*.scss', css_tienda);
    gulp.watch('scss/*.scss', css_tienda);

    gulp.watch('scss/shared/*.scss', css_detalle);
    gulp.watch('scss/detalle/*.scss', css_detalle);
    gulp.watch('scss/*.scss', css_detalle);

    gulp.watch('scss/shared/*.scss', css_regalar_libro);
    gulp.watch('scss/regalo/*.scss', css_regalar_libro);
    gulp.watch('scss/*.scss', css_regalar_libro);

    gulp.watch('scss/shared/*.scss', css_regalo);
    gulp.watch('scss/regalo/*.scss', css_regalo);
    gulp.watch('scss/*.scss', css_regalo);
}

gulp.task('watch', gulp.parallel(watchFiles));
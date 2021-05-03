const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function compilando () {
    //Cualquier archivo con esa extensión (agregamos /* para cualquier subcarpeta, /** para los hijos de los hijos )
    return gulp.src('./scss/**/*.scss')
    .pipe(autoprefixer({
        versions: ['last 2 browsers']
    }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./assets/css'));
}

gulp.task('compilar', compilando);

gulp.task('default', () => {
    gulp.watch('./scss/**/*.scss', gulp.parallel(compilando));
});
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) 
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function image() {
    return gulp.src('./src/images/**/*') //** para pegar todas as pastas e * para pegar todos os arquivos/
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, image)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
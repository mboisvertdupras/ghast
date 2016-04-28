'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();
var sassLint = require('gulp-sass-lint');
var del = require('del');

gulp.task('clean', function() {
  return del(['css']);
});

gulp.task('lint', function () {
  gulp.src(['./src/base/*.s+(a|c)ss', './src/components/*.s+(a|c)ss'])
    .pipe(sassLint({
      'maxBuffer': 1228800
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('sourcemap', function () {
  gulp.src('./src/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  gulp.src('./src/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', ['clean', 'default'], function() {

    browserSync.init({
        server: {
            baseDir: ["app", "css"]
        },
        notify: true,
        open: false
    });

    gulp.watch(['src/*/*.sass', 'src/**/*.sass'], ['default']).on('change', browserSync.reload);
    gulp.watch("app/*.{html,php}").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'sourcemap'], function() {
  gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

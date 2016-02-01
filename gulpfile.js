'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var clean = require('gulp-clean');

gulp.task('default', ['clean', 'sass', 'sourcemap'], function() {
  gulp.src('./src/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean())
});

gulp.task('sass', function () {
  gulp.src('./src/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename("ghast.min.css"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sourcemap', function () {
  gulp.src('./src/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename("ghast.min.css.map"))
    .pipe(gulp.dest('dist'));
});

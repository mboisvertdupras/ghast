'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('clean', function() {
  return del(['css']);
});

gulp.task('sourcemap', function () {
  gulp.src('./src/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(sourcemaps.write())
    .pipe(rename("ghast.min.css.map"))
    .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  gulp.src('./src/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(rename("ghast.min.css"))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', ['clean', 'default'], function() {

    browserSync.init({
        server: {
            baseDir: ["app", "css"]
        },
        notify: true
    });

    gulp.watch(['src/*/*.sass', 'src/**/*.sass'], ['default']).on('change', browserSync.reload);
    gulp.watch("app/*.{html,php}").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'sourcemap'], function() {
  gulp.src('./src/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

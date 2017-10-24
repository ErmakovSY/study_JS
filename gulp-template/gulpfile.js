/* Base */
const gulp = require('gulp');
const data = require('gulp-data');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

/* Plugin for webserver */
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/* Plugin for HTML */
const htmlmin = require('gulp-htmlmin');

/* Plugin for SASS */
const sass = require('gulp-sass');

/* Plugin for JS */
const uglify = require('gulp-uglify');
const pump = require('pump');

/* Task for HTML */
gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(reload({ stream: true }));
});

/* Task Build */
gulp.task('build', ['html', 'sass', 'js', 'font-awesome', 'images']);

/* Task for webserver */
const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "bouncy"
};
gulp.task('webserver', () => browserSync(config));

/* Task SASS */
gulp.task('sass', () => {
  return gulp.src('./src/styles/main.scss')     //return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({ stream: true }));
});

/* Task JS */
gulp.task('js', (cb) => {
  pump([
      gulp.src('./src/js/*.js'),
      uglify(),
      gulp.dest('./build/js')
    ],
    cb
  );
});

/* Task Font-awesome */
gulp.task('font-awesome', () => {
  return gulp.src(
    './src/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.*')
    .pipe(gulp.dest('./build/fonts/'))
});

/* Task Images */
gulp.task('images', () => {
  return gulp.src(
      './src/img/**/*')
      .pipe(gulp.dest('./build/img'))
});

/* Task Watch */
gulp.task('watch', () => {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/styles/**/*.scss', () => gulp.run('sass'));
  watch('./src/js/*.js', () => gulp.run('js'));
  watch('./src/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.*', () => gulp.run('font-awesome'));
  watch('./src/img/**/*', () => gulp.run('images'));
});

/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);
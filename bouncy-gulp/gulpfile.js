/* Base */
const gulp = require('gulp');
const data = require('gulp-data');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

/* Plugin for webserver */
const browserSync = require("browser-sync"); /* Local web-server */
const reload = browserSync.reload;

/* Plugin for HTML */
const htmlmin = require('gulp-htmlmin');

/* Plugin for SASS */
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

/* Plugin for JS */
const concat = require('gulp-concat');
const minify = require('gulp-minify');

/* HELPERS */
const newer = require('gulp-newer'); /* Plugin look for new changes in files */
const clean = require('gulp-clean'); /* Plugin delete some folder, content */

/* Task for HTML */
gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(reload({ stream: true }));
});

/* Task for CSS */
gulp.task('css', () => {
  gulp.src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({ stream: true }));
});

/* Task for JS */
gulp.task('js', () => {
  gulp.src([
    './src/vendor/jquery/dist/jquery.min.js',
    './src/vendor/jquery-ui/jquery-ui.min.js',
    './src/vendor/imagesloaded/imagesloaded.pkgd.min.js',
    './src/vendor/wookmark/wookmark.min.js',
    './src/vendor/slick-carousel/slick/slick.min.js',
    './src/vendor/jquery-slimscroll/jquery.slimscroll.min.js',
    './src/js/main.js'
  ])
    .pipe(concat('main.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      compress: true,
      noSource: true,
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({ stream: true }));
});

/* Task for PHP */
gulp.task('php', () => {
  gulp.src('./src/php/**/*.php')
    .pipe(newer('./build/'))
    .pipe(gulp.dest('./build/php/'))
    .pipe(reload({ stream: true }));
});

/* Task for Images */
gulp.task('image', () => {
  gulp.src('./src/img/**/*.*')
    .pipe(newer('./build/img/'))
    .pipe(gulp.dest('./build/img/'))
    .pipe(reload({ stream: true }));
});

/* Task for Fonts */
gulp.task('fonts', () => {
  gulp.src([
    './src/fonts/**/*.*',
    './src/vendor/font-awesome/fonts/*.*'
  ])
    .pipe(newer('./build/fonts/'))
    .pipe(gulp.dest('./build/fonts/'))
});

/* Task for file .htaccess */
gulp.task('htaccess', () => {
  gulp.src('./src/.htaccess')
    .pipe(gulp.dest('./build/'))
});

/* Task Build */
gulp.task('build', ['html', 'css', 'js', 'php', 'image', 'fonts', 'htaccess']);

/* Task for webserver */
const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "SERVER"
};

gulp.task('webserver', () => browserSync(config));

/* Task Watch */
gulp.task('watch', function () {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/styles/**/*.scss', () => gulp.run('css'));
  watch('./src/js/**/*.js', () => gulp.run('js'));
  watch('./src/img/**/*.*', () => gulp.run('image'));
  watch('./src/fonts/**/*.*', () => gulp.run('fonts'));
});

/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);

/* Task Clean (delete folder [build/]) */
gulp.task('clean', () => {
  gulp.src('build', { read: false })
    .pipe(clean());
});

//gulp-rename (add suffix .min to file name)
//gulp-notify (show error not in console, but in browser)

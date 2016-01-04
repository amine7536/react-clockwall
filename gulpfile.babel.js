import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, { reload } from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import htmlReplace from 'gulp-html-replace';
import runSequence from 'run-sequence';

const paths = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  srcCss: 'src/**/*.css',
  dist: 'dist',
  distJs: 'dist/js',
};

/* https://github.com/isaacs/rimraf
*  The UNIX command rm -rf for node
*
*  Description : Clean everthing under dist folder
*/
gulp.task('clean', cb => {
  rimraf('dist', cb);
});

/* https://www.browsersync.io/docs/gulp/
*  Time-saving synchronised browser testing
*
*  Description: Start Development Server with LiveReload
*/
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

/* https://www.npmjs.com/package/watchify
*  Watch mode for browserify builds
*
*  Description: Watch for changes in source files
*/

gulp.task('watchify', () => {
  let bundler = watchify(browserify(paths.srcJsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(paths.bundle))
      .pipe(gulp.dest(paths.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

/* http://browserify.org
*  Browserify lets you require('modules') in the browser
*
*  http://babeljs.io
*  Use next generation JavaScript, today
*
*  Description: Tranpiles and Minify all JS source files from ES6 to ES5
*/
gulp.task('browserify', () => {
  browserify(paths.srcJsx)
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJs));
});

/* https://www.npmjs.com/package/gulp-postcss
*  PostCSS is a tool for transforming styles with JS plugins
*
*  Description: Transform CSS using plugins : autoprefixer & cssnano
*/
gulp.task('styles', () => {
  gulp.src(paths.srcCss)
  .pipe(sourcemaps.init())
  .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({stream: true}));
});

/* https://www.npmjs.com/package/gulp-html-replace
*  Replace build blocks in HTML
*
*  Description: Build dist/index.html
*/
gulp.task('htmlReplace', () => {
  gulp.src('index.html')
  .pipe(htmlReplace({css: ['styles/reset.css','styles/main.css','styles/theme.css'], js: 'js/app.js'}))
  .pipe(gulp.dest(paths.dist));
});

/* https://github.com/adametry/gulp-eslint
*  A Gulp plugin for identifying and reporting on patterns found in ECMAScript/JavaScript code
*
*  Description: Code analysis tool
*/
gulp.task('lint', () => {
  gulp.src(paths.srcJsx)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcCss, ['styles']);
  gulp.watch(paths.srcJsx, ['lint']);
});

/*
*  Description: DEVELEMENT MODE
*  - Start dev server on port 3000
*  - Start browserSync console on port 3001
*  - Watch sources files for changes
*  - LiveReload
*  - Code Lint
*/
gulp.task('watch', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'lint'], cb);
});

/*
*  Description: PRODUCTION
*  - Build production package under dist folder
*/
gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'styles', 'htmlReplace'], cb);
});

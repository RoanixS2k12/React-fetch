var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon');

gulp.task('browserify', function() {

    var bundler = browserify({
        entries: ['./app/main.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });

    var watcher  = watchify(bundler);

    watcher.on('update', rebundle);
    watcher.on('log', gutil.log.bind(gutil));

    function rebundle() {
        return watcher.bundle()
            .on('error', gutil.log.bind(gutil, 'JSX Error'))
            .pipe(source('main.jsx'))
            .pipe(rename("app.js"))
            .pipe(gulp.dest('./build/'))
            .pipe(connect.reload())
            .pipe(notify('Compilation succeeded'));
    }

    return rebundle();

});

/* Compiling sass files */
gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({
            includePaths: bourbon.includePaths
        }))
        .on('error', gutil.log.bind(gutil, 'Sass Error'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(connect.reload())
});

/* Watching for sass file changing */
gulp.task('watch-sass', function () {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});


/* WEB SERVER */
gulp.task('connect', function() {
    connect.server({
        port : 8081,
        fallback: 'index.html',
        livereload: true
    });
});

// Just running the two tasks
gulp.task('default', ['connect', 'browserify', 'watch-sass']);

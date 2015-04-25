var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./app/main.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () {
        // var updateStart = Date.now();
        // console.log('Updating!');
        watcher.bundle()
        .pipe(source('main.jsx'))
        .pipe(rename("app.js"))
        .pipe(gulp.dest('./build/'))
        .pipe(notify('Compilation succeeded'));
        // console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.jsx'))
    .pipe(rename("app.js"))
    .pipe(gulp.dest('./build/'));
});

// Just running the two tasks
gulp.task('default', ['browserify']);

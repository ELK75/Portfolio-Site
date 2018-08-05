var gulp = require('gulp'),
watch = require('gulp-watch'),
exec = require('child_process').exec

gulp.task('watch', function() {

    watch('./scripts/**/*.js', function() {
        gulp.start('webpack');
    });
});

gulp.task('webpack', function() {
    exec('webpack');
})
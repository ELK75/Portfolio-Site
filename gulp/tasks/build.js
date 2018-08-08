var gulp = require('gulp'),
del = require('del'),
exec= require('gulp-exec'),
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify'),
cssnano = require('gulp-cssnano'),
rev = require('gulp-rev');

gulp.task('deleteDistFolder', function() {
    return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    gulp.src('./files')
        .pipe(gulp.dest('./docs/files'));
    
    return gulp.src('./img/**/*')
        .pipe(gulp.dest('./docs/img'))
})

gulp.task('usemin', ['deleteDistFolder'], function() {
    return gulp.src("./index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'usemin', 'copyGeneralFiles']);
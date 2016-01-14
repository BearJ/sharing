var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['server'], function () {
    gulp.watch('/**/*.*', function () {
        browserSync.reload();
    });
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "."
        },
        port: 80
    });
});
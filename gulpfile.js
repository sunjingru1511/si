var gulp = require("gulp");
var minifyCss = require("gulp-minify-css");
var concat = require("gulp-concat");

var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var webserver = require("gulp-webserver");


//var watchFile = [];

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8080,
            host: "localhost",
            fallback: 'index.html'
        }));
});


gulp.task("default", function () {
    gulp.start("webserver");
});

// gulp.task("watch", function () {
//     gulp.watch(["./css/*.sass"], ["style"]);
// });
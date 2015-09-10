var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    notify = require("gulp-notify");
//JS 
var jshint = require("gulp-jshint");
gulp.task("lint", function () {
    return gulp.src(["test/katas.test.js", "katas/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

//tests
var karma = require("karma").server;
gulp.task("test", function (done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, function (exitCode) {
        done(exitCode ? "There are failing tests" : undefined);
    });
});

gulp.task("default", function () {
    gulp.start("test", "lint");
});


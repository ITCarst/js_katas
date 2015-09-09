var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    notify = require("gulp-notify");
//JS 
var jshint = require("gulp-jshint");

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
    gulp.start("test");
});


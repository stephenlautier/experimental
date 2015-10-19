var gulp = require("gulp");
var del = require("del");
var runSeq = require("run-sequence");

var paths = require("../paths");


gulp.task("clean", (cb) => {
	return runSeq(
		["clean:dist", "clean:artifact"],
		cb);
});


gulp.task("clean:dist", () => {
	return del(paths.output)
});

gulp.task("clean:artifact", () => {
	return del(paths.artifact)
});
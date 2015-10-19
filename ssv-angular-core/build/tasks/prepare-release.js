var gulp = require("gulp");
var runSeq = require("run-sequence");
var fs = require("fs");
var bump = require("gulp-bump");
var args = require("../args");

var paths = require("../paths");

gulp.task("bump-version", () => {
	return gulp.src(["./package.json", "./bower.json"])
		.pipe(bump({ type: args.bump })) //major|minor|patch|prerelease
		.pipe(gulp.dest("./"));
});


gulp.task("prepare-release", (cb) => {
	return runSeq(
		"build:rel",
		// "lint",
		"bump-version",
		// "doc",
		// "changelog",
		cb);
});
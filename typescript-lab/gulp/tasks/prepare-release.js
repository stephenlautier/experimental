var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);
var args = require("../args");

gulp.task("prepare-release", (cb) => {
	return $.runSequence(
		"clean",
		"build:rel",
		"bump-version",
		"doc",
		"changelog",
		cb);
});

gulp.task("bump-version", () => {
	return gulp.src(["./package.json", "./bower.json"])
		.pipe($.bump({ type: args.bump, preid: args.versionSuffix })) //major|minor|patch|prerelease
		.pipe(gulp.dest("./"));
});

gulp.task("changelog", () => {
	var fs = require("fs");
	return $.conventionalChangelog({
		preset: "angular",
		releaseCount: 0
	})
		.pipe(fs.createWriteStream(`${config.doc}/CHANGELOG.md`));
});
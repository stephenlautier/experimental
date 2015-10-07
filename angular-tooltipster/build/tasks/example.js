var gulp = require("gulp");
var runSeq = require("run-sequence");
var merge = require("merge2");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");

var paths = require("../paths");

var tsProject = tsc.createProject("tsconfig.json", {
	sortOutput: true,
	typescript: typescript
});

gulp.task("example:build", (cb) => {

	return runSeq(
		"example:compile:ts"
		);

});

gulp.task("example:compile:ts", () => {

	var tsResult = gulp.src(paths.example.src.ts)
	//.pipe(plumber())
	//.pipe(changed(paths.dist.appJs, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return merge([
		tsResult.js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(paths.example.output.app))
	]);
});

gulp.task("example:clean", () => {

	return del(paths.example.outputRoot);
});
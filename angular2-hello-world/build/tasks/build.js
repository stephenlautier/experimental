var gulp = require("gulp");
var runSeq = require("run-sequence");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");

var paths = require("../paths");

gulp.task("build", (cb) => {
	return runSeq(
		["compile:ts", "html"],
		cb);
});

// scripts
gulp.task("compile:ts", () => {
	var tsProject = getTscProject();
	var tsResult = gulp.src(paths.src.ts)
		.pipe(plumber())
	//.pipe(changed(paths.dist.appJs, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(`${paths.output.root}/${paths.output.dist}`))
});

function getTscProject() {
	return tsc.createProject("tsconfig.json", {
		sortOutput: true,
		typescript: typescript
	});
}

// html
gulp.task("html", (cb) => {
	return runSeq(
		["compile:html", "compile:index-html"],
		cb);
});


gulp.task("compile:html", () => {
	return gulp.src(paths.src.html)
		.pipe(gulp.dest(`${paths.output.root}/${paths.output.dist}`))
});

gulp.task("compile:index-html", () => {
	return gulp.src(paths.src.indexHtml)
		.pipe(gulp.dest(paths.output.root))
});
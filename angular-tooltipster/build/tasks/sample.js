var gulp = require("gulp");
var runSeq = require("run-sequence");
var merge = require("merge2");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var concat = require("gulp-concat");
var del = require("del");
var jspm = require("jspm");

var paths = require("../paths");

var tsProject = tsc.createProject("tsconfig.json", {
	sortOutput: true,
	typescript: typescript
});



gulp.task("sample:build", (cb) => {

	return runSeq(
		"sample:lib-build+sync",
		"sample:compile:ts",
		cb);

});

gulp.task("sample:compile:ts", () => {

	var tsResult = gulp.src(paths.sample.src.ts)
		.pipe(plumber())
	//.pipe(changed(paths.dist.appJs, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return merge([
		tsResult.js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(paths.sample.output.app))
	]);
});

gulp.task("sample:clean", () => {

	return del([paths.sample.outputRoot, paths.sample.output.dts]);
});


// rel
//---------------

gulp.task("sample:bundle", ["sample:build"], () => {
	jspm.setPackagePath(".")

	return jspm.bundle("app/app.sample", `${paths.sample.outputRoot}/${paths.sample.output.appFileName}`, {
		mangle: false,
		inject: true
	});
});

gulp.task("sample:massa-special", ["sample:bundle"], () => {

	return gulp.src([
		`${paths.sample.root}jspm_packages/system.js`,
		`${paths.sample.root}config.js`,
		`${paths.sample.outputRoot}/${paths.sample.output.appFileName}`
	])
		.pipe(concat(`${paths.sample.output.appFileName}`))
		.pipe(gulp.dest(`${paths.sample.outputRoot}`))

});



// lib
//-------------

gulp.task("sample:lib-build+sync", (cb) => {

	return runSeq(
		"build",
		"sample:copy-lib",
		cb);

});

gulp.task("sample:copy-lib", (cb) => {
	return runSeq(
		["sample:copy-lib-src", "sample:copy-dts"],
		cb)
});

gulp.task("sample:copy-lib-src", () => {
	return gulp.src([`${paths.output}**/*`, `!${paths.output}**/${paths.packageName}.d.ts`])
		.pipe(plumber())
		.pipe(gulp.dest(paths.sample.output.lib))
});

gulp.task("sample:copy-dts", () => {
	return gulp.src(`${paths.output}/${paths.packageName}.d.ts`)
		.pipe(plumber())
		.pipe(gulp.dest(paths.sample.output.dts))
});
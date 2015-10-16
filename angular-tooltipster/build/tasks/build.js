var gulp = require("gulp");
var runSeq = require("run-sequence");
var merge = require("merge2");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var dtsGen = require("dts-generator");

var paths = require("../paths");


var tsProject = tsc.createProject("tsconfig.json", {
	sortOutput: true,
	typescript: typescript
});

gulp.task("build", (cb) => {

	return runSeq(
		["compile:ts", "compile:dts"],
		cb);

});

gulp.task("compile:ts", () => {

	var tsResult = gulp.src(paths.src.ts)
		.pipe(plumber())
	//.pipe(changed(paths.dist.appJs, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return merge([
		tsResult.js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(paths.output))
	]);
});

gulp.task("compile:dts", () => {
	return dtsGen.generate({
		name: `${paths.packageName}`,
		baseDir: `${paths.root}`,
		files: ["./index.ts"],
		out: `${paths.output}/${paths.packageName}.d.ts`,
		main: `./index`
	}, (msg) => {
		console.log(`Generating ${paths.packageName}.d.ts: ${msg}`);
	});
});
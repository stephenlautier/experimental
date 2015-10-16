var gulp = require("gulp");
var runSeq = require("run-sequence");
var merge = require("merge2");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var dtsGen = require("dts-generator");
var dts = require("dts-bundle");

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
			.pipe(gulp.dest(paths.output)),
		// tsResult.dts
		// 	.pipe(gulp.dest(paths.output))
	]);
});

// d.ts generation using dts-generator
gulp.task("compile:dts", () => {
	return dtsGen.generate({
		name: `${paths.packageName}`,
		baseDir: `${paths.root}`,
		files: ["./index.ts", "../tools/typings/tsd.d.ts"],
		out: `${paths.output}/${paths.packageName}.d.ts`,
		main: `${paths.packageName}/index`,
		externs: ["../jquery/jquery.d.ts", "../angularjs/angular.d.ts", "../tooltipster/tooltipster.d.ts" ]
	}, (msg) => {
		console.log(`Generating ${paths.packageName}.d.ts: ${msg}`);
	});
});

// // d.ts generation using dts-bundle
// gulp.task("compile:dtsbundle", () => {
// 	
// 	return dts.bundle({
// 		name: "angular-tooltipster",
// 		main: "dist/index.d.ts",
// 		baseDir: "dist",
// 		externals: true,
// 		verbose: true
// 	})
// 	
// });
var gulp = require("gulp");
var util = require("gulp-util");
var browserSync = require("browser-sync");

var paths = require("../paths")

gulp.task("watch", ["serve"], () => {

	gulp.watch(paths.src.ts, ["compile:ts", browserSync.reload]).on("change", reportChange).on("error", swallowError);;
	
	// sample
	gulp.watch(paths.example.src.ts, ["example:compile:ts", browserSync.reload]).on("change", reportChange).on("error", swallowError);
	gulp.watch(paths.example.src.html, [browserSync.reload]).on("change", reportChange).on("error", swallowError);

});

gulp.task("serve", (cb) => {

	browserSync({
		open: true,
		port: 9000,
		server: {
			baseDir: ["example"],
			index: "index.html",
			middleware: function (req, res, next) {
				res.setHeader("Access-Control-Allow-Origin", "*");
				next();
			}
		},
		files: ["dist/*.*"]
	}, cb);

});

function reportChange(event) {
	console.log(`File ${event.path} was ${event.type}, running tasks...`);
}

function swallowError(error) {
	console.log(util.colors.red(`Error occurred while running watched task...`));
}
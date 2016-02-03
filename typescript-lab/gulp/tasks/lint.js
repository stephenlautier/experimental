var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

var config = require("../config");

gulp.task("lint", () => {
	return gulp.src([config.src.ts, `!${config.test.files}`])
		.pipe($.tslint())
		.pipe($.tslint.report($.tslintStylish, {
			emitError: false,
			sort: true,
			bell: true
		}));
});
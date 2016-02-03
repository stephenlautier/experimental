var yargs = require("yargs");

var argv = yargs.argv;
var validBumpTypes = "major|minor|patch|prerelease".split("|");
var bump = (argv.bump || "patch").toLowerCase();

if(validBumpTypes.indexOf(bump) === -1) {
	throw new Error(`Unrecognized bump '${bump}.`);
}

var versionSuffix = (argv.versionSuffix || "alpha" ).toLowerCase();

module.exports = {
	bump: bump,
	versionSuffix: versionSuffix
};
const npm = require("npm");
const { readNpmScripts } = require("./read-npm-scripts.js");
const { autocomplete } = require("./autocomplete.js");

const main = (scriptName, options) => {
  readNpmScripts(scriptName, options)
    .then(scripts => autocomplete({ choices: scripts, filter: scriptName }))
    .then(answer => npm["run-script"](answer))
    .catch(console.error);
};

module.exports = main;

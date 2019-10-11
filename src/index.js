const npm = require("npm");
const { readNpmScripts } = require("./read-npm-scripts.js");
const { autocomplete } = require("./autocomplete.js");

readNpmScripts()
  .then(scripts => autocomplete({ choices: scripts }))
  .then(answer => npm["run-script"](answer))
  .catch(console.error);

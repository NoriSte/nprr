const npm = require("npm");
const { readNpmScripts } = require("./read-npm-scripts.js");
const { autocomplete } = require("./autocomplete.js");
const { parseCmd } = require("./parse-cmd.js");

const main = (scriptName, options) => {
  const parsedCmd = parseCmd({ scriptName, options });
  scriptName = parsedCmd.scriptName;
  options = parsedCmd.options;
  return readNpmScripts()
    .then(scripts => autocomplete({ choices: scripts, filter: scriptName }))
    .then(answer => npm.run([answer, ...options]))
    .catch(console.error);
};

module.exports = main;

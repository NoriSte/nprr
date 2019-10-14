module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "jest",
    commandRunner: { command: "npm run unit:test" },
    transpilers: [],
    coverageAnalysis: "off",
    mutate: ["src/autocomplete.js", "src/index.js", "src/parse-cmd.js", "src/read-npm-scripts.js"]
  });
};

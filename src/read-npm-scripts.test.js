const { readNpmScripts } = require("./read-npm-scripts.js");

it("Should read the package.json scripts", () => {
  const scripts = require("../package.json").scripts;
  return expect(readNpmScripts()).resolves.toEqual(scripts);
});

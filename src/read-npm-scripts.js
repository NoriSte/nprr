"use strict";

const npm = require("npm");

const npmProjectLogPrefix = "NPM project: ";
const readNpmScripts = () =>
  new Promise((resolve, reject) => {
    npm.load(() => {
      if (!npm.config.sources.project.path) {
        reject("No NPM project found");
        return;
      }
      const packageJsonPath = npm.config.sources.project.path.replace(".npmrc", "package.json");
      console.log(npmProjectLogPrefix + packageJsonPath);
      const packageJson = require(packageJsonPath);
      resolve(packageJson.scripts);
    });
  });

module.exports = {
  readNpmScripts,
  npmProjectLogPrefix
};

"use strict";

const npm = require("npm");

const readNpmScripts = () =>
  new Promise(resolve => {
    npm.load(() => {
      if (!npm.config.sources.project.path) {
        throw new Error("No NPM project found");
      }
      const packageJsonPath = npm.config.sources.project.path.replace(".npmrc", "package.json");
      console.log(`NPM project: ${packageJsonPath}`);
      const packageJson = require(packageJsonPath);
      resolve(packageJson.scripts);
    });
  });

module.exports = {
  readNpmScripts
};

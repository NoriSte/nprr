const npm = require("npm");

const readNpmScripts = () =>
  new Promise(resolve => {
    npm.load(() => {
      const packageJsonPath = npm.config.sources.project.path.replace(".npmrc", "package.json");
      const packageJson = require(packageJsonPath);
      resolve(packageJson.scripts);
    });
  });

module.exports = {
  readNpmScripts
};

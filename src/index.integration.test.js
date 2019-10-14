"use strict";

const npm = require("npm");
const main = require("./index.js");
const { readNpmScripts } = require("./read-npm-scripts.js");

it("Should work", async () => {
  const scripts = await readNpmScripts();
  const scriptNames = Object.keys(scripts);
  const argv = await main();

  expect(npm.load).toBeCalled();
  expect(npm.run).toBeCalled();
  expect(scriptNames).toContain(npm.run.mock.calls[0][0][0]);
  expect(argv).toBe(npm.run.mock.calls[0][0]);
});

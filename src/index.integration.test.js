"use strict";

const npm = require("npm");
const waitForExpect = require("wait-for-expect");
const main = require("./index.js");
const { readNpmScripts } = require("./read-npm-scripts.js");

it("Should call one of the available commands", async () => {
  const scripts = await readNpmScripts();
  const scriptNames = Object.keys(scripts);

  expect(npm.load).toBeCalled();
  main();
  await waitForExpect(() => {
    expect(npm.run).toBeCalled();
    expect(scriptNames).toContain(npm.run.mock.calls[0][0][0]);
  }, 1000);
});

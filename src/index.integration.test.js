const npm = require("npm");
const waitForExpect = require("wait-for-expect");
const main = require("./index.js");
const { readNpmScripts } = require("./read-npm-scripts.js");

const { parseCmd } = require("./parse-cmd.js");

it("TEST TO NAME", async () => {
  const scripts = await readNpmScripts();
  const firstScript = Object.keys(scripts)[0];

  expect(npm.load).toBeCalled();
  main();
  await waitForExpect(() => {
    expect(npm.run).toBeCalledWith([firstScript]);
  }, 1000);
});

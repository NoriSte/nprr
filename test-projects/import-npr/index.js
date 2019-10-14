const assert = require("assert");
const npr = require("npr");

npr("test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
npr("npr test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
npr("npm run test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
npr(["test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});
npr(["npr", "test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});
npr(["npm", "run", "test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});

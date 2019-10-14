const assert = require("assert");
const nprr = require("nprr");

nprr("test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
nprr("nprr test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
nprr("npm run test").then(argv => {
  assert.deepEqual(argv, ["test"]);
});
nprr(["test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});
nprr(["nprr", "test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});
nprr(["npm", "run", "test"]).then(argv => {
  assert.deepEqual(argv, ["test"]);
});

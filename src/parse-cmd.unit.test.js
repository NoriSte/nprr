"use strict";

const { parseCmd } = require("./parse-cmd.js");

describe.each([
  [[], { scriptName: "", options: [] }],
  [["cmd"], { scriptName: "cmd", options: [] }],
  [["cmd", "--"], { scriptName: "cmd", options: [] }],
  [["cmd", "--", "op1"], { scriptName: "cmd", options: ["op1"] }],
  [["cmd", "--", "op1", "op2"], { scriptName: "cmd", options: ["op1", "op2"] }],
  [["cmd", "op1"], { scriptName: "cmd", options: ["op1"] }],
  [["cmd", "op1", "op2"], { scriptName: "cmd", options: ["op1", "op2"] }],
  [["--"], { scriptName: "", options: [] }],
  [["--", "op1"], { scriptName: "", options: ["op1"] }],
  [["--", "op1", "op2"], { scriptName: "", options: ["op1", "op2"] }]
])("With %j should return %j", (params, expected) => {
  test("Passed as array", () => {
    expect(parseCmd(params)).toEqual(expected);
  });
  test("Passed as string", () => {
    expect(parseCmd(params.join(" "))).toEqual(expected);
  });

  describe("Prefixed by `nprr`", () => {
    let paramsWithNprr = ["nprr", ...params];
    test("Passed as array", () => {
      expect(parseCmd(paramsWithNprr)).toEqual(expected);
    });
    test("Passed as string", () => {
      expect(parseCmd(paramsWithNprr.join(" "))).toEqual(expected);
    });
  });

  describe("Prefixed by `npm run`", () => {
    let paramsWithNpmRun = ["npm", "run", ...params];
    test("Passed as array", () => {
      expect(parseCmd(paramsWithNpmRun)).toEqual(expected);
    });
    test("Passed as string", () => {
      expect(parseCmd(paramsWithNpmRun.join(" "))).toEqual(expected);
    });
  });
});

describe.each([[["/usr/bin/node", "src/index.js"], { scriptName: "", options: [] }]])(
  "With the full argv (%j) should return %j",
  (params, expected) => {
    test("Passed as array", () => {
      expect(parseCmd(params)).toEqual(expected);
    });
    test("Passed as string", () => {
      expect(parseCmd(params.join(" "))).toEqual(expected);
    });
  }
);

it("Should throw an error if called params that are not a string nr an array", () => {
  expect(() => {
    parseCmd({});
  }).toThrowErrorMatchingSnapshot();
});

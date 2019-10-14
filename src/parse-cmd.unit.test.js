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

  describe("Prefixed by `npr`", () => {
    let paramsWithNpr = ["npr", ...params];
    test("Passed as array", () => {
      expect(parseCmd(paramsWithNpr)).toEqual(expected);
    });
    test("Passed as string", () => {
      expect(parseCmd(paramsWithNpr.join(" "))).toEqual(expected);
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

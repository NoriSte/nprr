const { parseCmd } = require("./parse-cmd.js");

describe("parseCmd", () => {
  test.each([
    [{}, { scriptName: "", options: [] }],
    [{ scriptName: "cmd" }, { scriptName: "cmd", options: [] }],
    [{ scriptName: "cmd", options: ["--"] }, { scriptName: "cmd", options: [] }],
    [{ scriptName: "cmd", options: ["--", "op1"] }, { scriptName: "cmd", options: ["op1"] }],
    [
      { scriptName: "cmd", options: ["--", "op1", "op2"] },
      { scriptName: "cmd", options: ["op1", "op2"] }
    ],
    [{ scriptName: "cmd", options: ["op1"] }, { scriptName: "cmd", options: ["op1"] }],
    [
      { scriptName: "cmd", options: ["op1", "op2"] },
      { scriptName: "cmd", options: ["op1", "op2"] }
    ],
    [{ scriptName: "--" }, { scriptName: "", options: [] }],
    [{ scriptName: "--", options: [] }, { scriptName: "", options: [] }],
    [{ scriptName: "--", options: ["op1"] }, { scriptName: "", options: ["op1"] }],
    [{ scriptName: "--", options: ["op1", "op2"] }, { scriptName: "", options: ["op1", "op2"] }]
  ])("With %j should return %j", (params, expected) => {
    expect(parseCmd(params)).toEqual(expected);
  });
});

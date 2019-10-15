"use strict";
jest.unmock("npm");
jest.mock("npm", () => ({
  load: jest.fn(callback => callback()),
  config: {
    sources: {
      project: {
        path: undefined
      }
    }
  }
}));

const main = require("./index.js");

it("Should throw an error if the project is not found", async () => {
  await expect(main()).rejects.toMatchSnapshot();
});

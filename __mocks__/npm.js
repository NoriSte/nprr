jest.genMockFromModule("npm");

module.exports = {
  load: jest.fn(callback => callback()),
  run: jest.fn(),
  config: {
    sources: {
      project: {
        path: `${__dirname.replace("__mocks__", "")}/.npmrc`
      }
    }
  }
};

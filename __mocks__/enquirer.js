jest.genMockFromModule("enquirer");

module.exports = {
  AutoComplete: jest.fn(({ choices }) => ({
    run: jest.fn(() => Promise.resolve(choices[0]))
  }))
};

jest.genMockFromModule("enquirer");

const AutoCompleteMock = jest.fn(({ choices }) => ({
  run: jest.fn(() => {
    const randomChoice = Math.floor(Math.random() * (choices.length - 1));
    return Promise.resolve(choices[randomChoice]);
  })
}));

module.exports = {
  AutoComplete: AutoCompleteMock
};

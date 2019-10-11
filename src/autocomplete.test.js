const { autocomplete } = require("./autocomplete.js");

it("Should call the autocomplete module with all the available choices", () => {
  const choices = { a: "a", b: "b" };
  const prompt = { run: jest.fn() };
  const autocompleteModule = jest.fn(() => prompt);

  autocomplete({ choices, autocompleteModule });

  expect(autocompleteModule).toHaveBeenCalledWith(
    expect.objectContaining({ choices: Object.keys(choices) })
  );
  expect(prompt.run).toHaveBeenCalledWith();
});

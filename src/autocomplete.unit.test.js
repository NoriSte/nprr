const { autocomplete } = require("./autocomplete.js");
const { AutoComplete } = require("../__mocks__/enquirer");

it("Should resolve directly in case of exact match", () => {
  const choices = { a: "a" };
  const promise = autocomplete({ choices, filter: "a" });
  expect(AutoComplete).not.toHaveBeenCalled();
  return expect(promise).resolves.toBe(choices.a);
});

it("Should call the autocomplete module with all the available choices", () => {
  const choices = { a: "a", b: "b" };

  autocomplete({ choices, autoCompleteModule: AutoComplete });

  expect(AutoComplete).toHaveBeenCalledWith(
    expect.objectContaining({
      choices: Object.keys(choices),
      message: "npm run",
      name: "NPM scripts"
    })
  );
});

it("Should call the autocomplete module with a filtered set of scripts in case of partial match", () => {
  const choices = { foo: "", foo1: "", bar: "" };
  const filter = "foo";
  const filteredChoices = Object.keys(choices).filter(item => item.includes(filter));

  autocomplete({ choices, filter, autoCompleteModule: AutoComplete });

  expect(AutoComplete).toHaveBeenCalledWith(
    expect.objectContaining({
      choices: filteredChoices,
      message: `npm run (filter: ${filter})`,
      name: "NPM scripts"
    })
  );
});

it("Should throw an error if called without choices", () => {
  expect(() => {
    autocomplete({ choices: [] });
  }).toThrowErrorMatchingSnapshot();
});

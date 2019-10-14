const { autocomplete } = require("./autocomplete.js");
const { AutoComplete } = require("../__mocks__/enquirer");

it("Should call the autocomplete module with all the available choices", () => {
  const choices = { a: "a", b: "b" };

  autocomplete({ choices, autoCompleteModule: AutoComplete });

  expect(AutoComplete).toHaveBeenCalledWith(
    expect.objectContaining({ choices: Object.keys(choices) })
  );
});

it("Should resolve directly in case of exact match", () => {
  const choices = { a: "a" };
  return expect(autocomplete({ choices, filter: "a" })).resolves.toBe(choices.a);
});

it("Should call the autocomplete module with a filtered set of scripts in case of partial match", () => {
  const choices = { foo: "", foo1: "", bar: "" };
  const filter = "foo";
  const filteredChoices = Object.keys(choices).filter(item => item.includes(filter));

  autocomplete({ choices, filter, autoCompleteModule: AutoComplete });

  expect(AutoComplete).toHaveBeenCalledWith(expect.objectContaining({ choices: filteredChoices }));
});

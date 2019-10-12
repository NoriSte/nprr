const autocomplete = ({
  choices,
  filter,
  autocompleteModule = require("enquirer").AutoComplete
}) => {
  if (choices[filter]) {
    return Promise.resolve(filter);
  }

  const keys = Object.keys(choices);
  const prompt = new autocompleteModule({
    name: "NPM scripts",
    message: "npm run",
    choices: keys
  });

  return prompt.run();
};

module.exports = {
  autocomplete
};

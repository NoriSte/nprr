const autocomplete = ({ choices, autocompleteModule = require("enquirer").AutoComplete }) => {
  const prompt = new autocompleteModule({
    name: "NPM scripts",
    message: "npm run",
    choices: Object.keys(choices)
  });

  return prompt.run();
};

module.exports = {
  autocomplete
};

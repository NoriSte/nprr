const autocomplete = ({ choices, autocompleteModule = require("enquirer").AutoComplete }) => {
  const keys = Object.keys(choices);
  if (keys.length === 1) {
    return Promise.resolve(keys[0]);
  }

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

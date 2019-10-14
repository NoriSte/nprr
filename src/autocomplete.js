"use strict";

const autocomplete = ({ choices, filter }) => {
  if (choices[filter]) {
    return Promise.resolve(filter);
  }
  const keys = Object.keys(choices);
  const prompt = new (require("enquirer")).AutoComplete({
    name: "NPM scripts",
    message: "npm run",
    choices: keys
  });

  return prompt.run();
};

module.exports = {
  autocomplete
};

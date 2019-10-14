"use strict";

const autocomplete = ({ choices, filter }) => {
  // exact match
  if (choices[filter]) {
    return Promise.resolve(filter);
  }

  let keys = Object.keys(choices);
  let message = "npm run";

  if (filter) {
    keys = keys.filter(item => item.includes(filter));
    message += ` (filter: ${filter})`;
  }

  if (!keys.length) {
    throw new Error("No scripts available");
  }

  const prompt = new (require("enquirer")).AutoComplete({
    name: "NPM scripts",
    message,
    choices: keys
  });

  return prompt.run();
};

module.exports = {
  autocomplete
};

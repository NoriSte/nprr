const parseCmd = ({ scriptName, options } = { scriptName: "", options: [] }) => {
  const optionsSeparator = "--";
  if (scriptName === optionsSeparator) {
    scriptName = undefined;
  }
  if (Array.isArray(options) && options[0] === optionsSeparator) {
    options.shift();
  }

  return { scriptName: scriptName || "", options: options || [] };
};

module.exports = {
  parseCmd
};

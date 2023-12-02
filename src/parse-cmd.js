"use strict";

const parseCmd = (params = []) => {
  if (typeof params === "string") {
    params = params.split(" ");
  }
  if (!Array.isArray(params)) {
    throw new TypeError(`${params} should be an array or a string`);
  }

  params = [...params];

  // remove both '/usr/local/bin/node' and the script itself
  if (params.length && params[0].endsWith("bin/node")) {
    params.shift();
    params.shift();
  }
  // remove nprr
  if (params.length && params[0] === "nprr") {
    params.shift();
  }
  // remove npm run
  if (params.length > 1 && params[0] === "npm" && params[1] === "run") {
    params.shift();
    params.shift();
  }

  // remove for Windows
  if (params.length > 1 && process.platform === "win32") {
    const regex = new RegExp('[a-zA-Z]:\\.*');
    const result = params.filter(param => !regex.test(param));
    params = result;
  }
  
  let [scriptName, ...options] = params;

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

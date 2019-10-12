const [, , scriptName, ...options] = process.argv;
require("./index.js")(scriptName, options);

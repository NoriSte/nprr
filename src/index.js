'use strict'

const npm = require('npm')
const { readNpmScripts } = require('./read-npm-scripts.js')
const { autocomplete } = require('./autocomplete.js')
const { parseCmd } = require('./parse-cmd.js')

const main = (argv) => {
  const { scriptName, options } = parseCmd(argv)
  return readNpmScripts()
    .then((scripts) => autocomplete({ choices: scripts, filter: scriptName }))
    .then(
      (answer) =>
        new Promise((resolve) => {
          const params = [answer, ...options]
          npm.commands['run-script'](params)
          resolve(params)
        })
    )
}

module.exports = main

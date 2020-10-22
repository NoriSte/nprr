'use strict'

const npm = require('npm')

const npmProjectLogPrefix = 'NPM project: '
const readNpmScripts = () =>
  new Promise((resolve, reject) => {
    npm.load(() => {
      const npmrcPath = getNpm6ProjectPath(npm) || getNpm7ProjectPath(npm)
      if (!npmrcPath) {
        reject('No NPM project found')
        return
      }

      const packageJsonPath = npmrcPath.replace('.npmrc', 'package.json')
      console.log(npmProjectLogPrefix + packageJsonPath)
      const packageJson = require(packageJsonPath)
      resolve(packageJson.scripts)
    })
  })

module.exports = {
  readNpmScripts,
  npmProjectLogPrefix,
}

const getNpm6ProjectPath = (npm) => {
  if (npm.config.sources.project) return npm.config.sources.project.path
}
const getNpm7ProjectPath = () => {
  let project
  npm.config.sources.forEach((value, key) => {
    if (value === 'project') {
      project = key
    }
  })
  return project
}

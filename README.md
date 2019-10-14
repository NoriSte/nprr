# npr
npm run + autocomplete = npr 🎉

[![Build Status](https://travis-ci.com/NoriSte/npr.svg?branch=master)](https://travis-ci.com/NoriSte/npr) [![Coverage Status](https://coveralls.io/repos/github/NoriSte/npr/badge.svg?branch=master)](https://coveralls.io/github/NoriSte/npr?branch=feature/npr) [![Mutation testing badge](https://badge.stryker-mutator.io/github.com/NoriSte/npr/master)](https://stryker-mutator.github.io) [![Build Cron](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/npr)
<br />[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## What is npr?

Npr is an `npm run` enhancer! It runs the good `npr run` programmatically (through `npm.run()`, not `child_process.exec()`) or let you choose the script to launch with autocomplete.

## Features

- runs a script the same way `npm run` would do
- `$ npr` reads the package.json scripts and let you choose the script to run with autocomplete
- `$ npr te` filters all the scripts containing `te` and lets you choose the script to run with autocomplete
- `$ npr test` runs directly any existing script (ex. `test`)

## Examples
Imagine your package.json contains the following scripts:

```json
{
  "scripts": {
    "test": "...",
    "test:unit": "...",
    "test:e2e": "...",
    "build:production": "...",
    "build:staging": "...",
    "commit": "..."
  }
}
```

- `$ npr` presents an autocomplete with all the available scripts
- `$ npr te` presents an autocomplete with all the scripts containing "te" ("test", "test:unit", "test:e2e")
- `$ npr test` launches directly `npm run test`

## Command options

All the scripts can be launched with options too, all the next examples chain `op1 op2` to the executed script, just after the autocomplete (or exact match) process:
- `$ npr -- op1 op2`
- `$ npr te -- op1 op2`
- `$ npr te op1 op2`
- `$ npr test -- op1 op2`
- `$ npr test op1 op2`



## Installation

`npm i -g npr`

## FAQs

#### Could I use npr programmatically?
Certainly! The script below leverages npr and gets the arguments passed to `npr.run()` (please, do not forget to install npr locally with `npm i -D npr`)
```js
const npr = require("npr");
npr("test").then(argv => {
  console.log(argv);
});
```
Npr accepts an array of strings or a string as the only argument.

#### Is it possible to use edit the filter passed to npr?
Unfortunately not but I'd love to add it as soon as possible. Npr leverages [Enquirer](https://github.com/enquirer/enquirer) but, at the moment, it does not allow to do that, see the [related issue](https://github.com/enquirer/enquirer/issues/66) (and [Inquirer](https://github.com/SBoudrias/Inquirer.js/) can do that [neither](https://github.com/SBoudrias/Inquirer.js/issues/590)).

#### Could npm allow for both autocomplete and fuzzy search?
At the moment the fuzzy search is not supported. I need to investigate how it could be done with Enquirer/Inquirer.

#### Does a less-obtrusive solution exist to list the package.json scripts without opening it?
Try [Jaga Santagostino](https://github.com/kandros)'s [`script` command](https://jagascript.com/using-custom-terminal-functions/#print-packagejson-scripts).

### Notes
The E2E tests are run directly with Travis, take a look at the [`.travis.yml`](./.travis.yml) file.



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni"/><br /><sub><b>Stefano Magni</b></sub></a><br /><a href="https://github.com/NoriSte/npr/commits?author=NoriSte" title="Code">💻</a> <a href="#docs-NoriSte" title="Docs">📖</a> <a href="#content-NoriSte" title="Content">🖋</a> <a href="#example-NoriSte" title="Examples">💡</a> <a href="#ideas-NoriSte" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

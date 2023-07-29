# SteganoJS

## Description

This is a basic steganography library inspired by [steganography](https://en.wikipedia.org/wiki/Steganography), using the Lowest Significant Bit (LSB) algorithm.

This package uses the more lightweight pngjs for image parsing, nice ES6+ features, and a pure functional approach. It is designed for programmatic use.

There is currently only support for .png files.

## Badges

[![Npm package version](https://badgen.net/npm/v/steganojs)](https://npmjs.com/package/steganojs)

[![Minimum node.js version](https://badgen.net/npm/node/steganojs)](https://npmjs.com/package/steganojs)

[![Npm package license](https://badgen.net/npm/license/steganojs)](https://npmjs.com/package/steganojs)

[![Npm package total downloads](https://badgen.net/npm/dt/steganojs)](https://npmjs.com/package/steganojs)

## Visuals

![LSB Steganography](https://www.secplicity.org/wp-content/uploads/2017/06/Hidden.png)

## Installation

```sh
npm install steganojs
```

## Usage

To conceal a message in an image:

```js
// Import built-in module
import { readFileSync, writeFileSync } from 'fs';

// Import module function
import { conceal } from 'steganojs';

const imageBuffer = readFileSync('./path/to/image.png'); // buffer
const messageToConceal = 'keep it secret, keep it safe'; // string or buffer

// Encoding should be supplied if message is provided as a string in non-default encoding

const encodedFile = conceal(
  imageBuffer,
  messageToConceal,
  /*, optional Buffer Encoding
  , optional AES256 encryption password */
);

writeFileSync('./path/to/output.png', encodedFile);
```

To reveal a message hidden in an image:

```js
// Import built-in module
import { readFileSync } from 'fs';

// Import module function
import { reveal } from 'steganojs';

const imageBuffer = readFileSync('./path/to/image.png'); // buffer

// Returns a string if encoding is provided, otherwise a buffer
const revealedMessage = reveal(
  imageBuffer,
  /*, optional Buffer Encoding
  , optional AES256 encryption password */
);

console.log(revealedMessage.toString());
```

## Support

If you need help, please go to the [project issue tracker](https://gitlab.com/Danes99/steganojs/-/issues).

## Road map

### Tests

- Add Buffer tests
- Add XML/TOML encoding tests
- Add tests on dynamic generated PNG file and buffers
- Add [code coverage analysis](https://about.codecov.io/)

### CI/CD Pipeline

- Add automatic semantic version numbering for small updates

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

You can also document commands to [lint](https://stackoverflow.com/questions/8503559/what-is-linting) the code or run [tests](https://en.wikipedia.org/wiki/Test_automation).These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something.

## Authors and acknowledgment

This module is a Typescript refactoring of the initial [steggy](https://github.com/willclarktech/steggy) JavaScript module by [Will Clark](https://github.com/willclarktech).

I want to thank [C-J Kihl](https://medium.com/@carljohan.kihl?source=post_page-----44fe7164964c--------------------------------) for his [article](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c) on how to publish a TypeScript NPM package and webbureaucrat for his help with [Continuously Deploying an NPM Package with GitLab CI/CD](https://webbureaucrat.gitlab.io/posts/continuously-deploying-an-npm-package-with-gitlab-ci-cd/).

I want to thank [Naereen](https://github.com/Naereen/) for his document about [README.md badges](https://github.com/Naereen/badges/blob/master/README.md).

## License

[AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

## Project status

Currently working on the project.

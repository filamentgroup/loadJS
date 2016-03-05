# Contributing to loadJS

## Install development dependencies

loadJS' build process uses [npm](https://www.npmjs.com/) and [Node.js](http://nodejs.org/). If you're using a Mac, the easiest way to install npm and Node.js (and plenty of other great tools) is with [Homebrew](http://brew.sh/):

```sh
brew install node
```

If you're using a different operating system, use a different package manager, or prefer not to use Homebrew, check out the [Node.js Downloads page](http://nodejs.org/download/).

## Get set up to contribute

Contributing to loadJS is pretty straightforward:

1. Fork the loadJS repo and clone it.
1. Install development dependencies by running `npm install` from the root of the project.
1. Create a feature branch for the issue or new feature you're looking to tackle: `git checkout -b your-descriptive-branch-name`.
1. _Write some code!_
1. Commit your changes: `git commit -am 'Add some new feature or fix some issue'`.
1. Push the branch to your fork of loadJS: `git push origin your-descriptive-branch-name`.
1. Create a new pull request and we'll give it a look!

## "But what files do I change?!?"

Excellent question. loadJS's source code is in the file `src/loadJS.js`. Make your changes here!

When you're done working (and before you push your code or issue a pull request), run `npm run build` from the root of the project to recreate the files in the `dist` folder. This task will generate compiled and compressed versions of the project.

**Do not directly edit the files in the `dist` folder!**

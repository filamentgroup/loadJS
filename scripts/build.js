#!/usr/bin/env node

'use strict';

let colors = require('colors'),
	exec = require('child_process').exec,
	pkg = require('../package.json'),
	contributors = pkg.contributors.map(function(contributor) {
		return contributor.split(/(?:\s<.*>)?\s\(.*\)/)[0];
	}).join(', '),
	preamble = `/*! loadJS: ${pkg.description} (c) 2014-present ${contributors} (Based on http://goo.gl/REQGQ by Paul Irish). Freely distributed under the ${pkg.license} license. */`;

exec(`$(npm bin)/uglifyjs src/loadJS.js --beautify "indent-level=2" --preamble "${preamble}" --output dist/loadJS.js`);
exec(`$(npm bin)/uglifyjs src/loadJS.js --compress --mangle --preamble "${preamble}" --output dist/loadJS.min.js`);

console.log(colors.green(`loadJS ${pkg.version} built successfully!`));

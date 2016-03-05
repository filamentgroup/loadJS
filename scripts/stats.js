#!/usr/bin/env node

'use strict';

let cliTable = require('cli-table'),
	commaNumber = require('comma-number'),
	fs = require('fs'),
	gzipSize = require('gzip-size'),
	table = new cliTable({
		style: {
			head: ['cyan']
		}
	});

table.push(
	{ 'Uncompressed': `${commaNumber(fs.statSync('dist/loadJS.js').size)} bytes` },
	{ 'Minified': `${commaNumber(fs.statSync('dist/loadJS.min.js').size)} bytes` },
	{ 'Minified and gzipped': `${commaNumber(gzipSize.sync(fs.readFileSync('dist/loadJS.min.js')))} bytes` }
);

console.log(table.toString());

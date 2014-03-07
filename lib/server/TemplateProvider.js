/* 
 * catberry
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry's license follows:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, 
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = TemplateProvider;

var handlebars = require('handlebars'),
	path = require('path'),
	util = require('util'),
	fs = require('fs');

var ERROR_TEMPLATE_NOT_FOUND = 'Template "%s" not found',
	DEFAULT_ENCODING = 'utf8';

/**
 * Creates new instance of template provider.
 * @constructor
 */
function TemplateProvider(encoding) {
	this._encoding = encoding || DEFAULT_ENCODING;
}

/**
 * Current encoding for template files.
 * @type {string}
 * @private
 */
TemplateProvider.prototype._encoding = '';

/**
 * Loads and compile template from specified path.
 * @param {string} filename Template path.
 * @returns {Function} Compiled template.
 */
TemplateProvider.prototype.load = function (filename) {
	if (!fs.existsSync(filename)) {
		throw new Error(util.format(ERROR_TEMPLATE_NOT_FOUND, filename));
	}
	var source = fs.readFileSync(filename, {encoding: this._encoding});
	return handlebars.compile(source);
};
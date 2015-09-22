# no-falsy [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Removes falsy values from objects and arrays.  Converts all other falsy values to null.

## Example

```javascript
var noNil = require('no-falsy');
var input = [1, undefined];

noNil(input);
console.log(input); // [1];
```

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2015 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/no-falsy.svg
[npm-url]: https://npmjs.org/package/no-falsy
[npm-image]: http://img.shields.io/npm/v/no-falsy.svg

[travis-url]: https://travis-ci.org/jsdevel/node-no-falsy
[travis-image]: http://img.shields.io/travis/jsdevel/node-no-falsy.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-no-falsy
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-no-falsy/master.svg

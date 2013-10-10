
# bump-manifest

Bump an appcache manifest's timestamp.

When using appcache manifests you have to modify it when your resources
changed, otherwise supporting browsers will keep your cached contents
forever!

This module inserts the current timestamp after the obligatory header
in order to cause a resource reload.

## Example

```js
var bump = require('bump-manifest');
var fs = require('fs');

var manifest = fs.readFileSync(__dirname + '/man.appcache');
fs.writeFileSync(__dirname + '/man.appcache', bump(manifest));
```

If your old manifest was like this:

```
CACHE MANIFEST
bundle.js
```

it now looks like that:

```
CACHE MANIFEST
# 1381439992058
bundle.js
```

And if it already had the timestamp, it has a new one now.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install bump-manifest
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

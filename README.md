# is-html-object
Check if referenced object is a DOM element or Browser Object

## Install
```shell
npm install --save is-html-object
```

## Dependencies
No dependencies are needed.

## Usage
```js
var isHtmlObject = require('is-html-object');

// Pass a selector string
if (isHtmlObject('#root')) {
 // is valid DOM element
}

if (isHtmlObject.htmlElement('#root')) {
	// is valid DOM element
}

// Pass a DOM element
if (isHtmlObject(document.getElementById('root'))) {
 // is valid DOM element
}

// Pass a Browser Object
if (isHtmlObject(window)) {
	// is window object
}
// Or
if (isHtmlObject.browserObject(window)) {
	// is window object
}

// Check if referenced object is an certain object
if (isHtmlObject.screen(screen)) {
	// is screen object
}

if (isHtmlObject.body(document.body)) {
	// is body element
}

if (isHtmlObject.anchor(document.querySelector('a'))) {
	// is anchor element
}

if (isHtmlObject.div('#root')) {
	// is div element
}
```

## License
MIT
# is-html-object
Check if referenced object is a DOM element or Browser Object
[![npm](https://img.shields.io/npm/v/is-html-object.svg?style=flat-square)](https://www.npmjs.com/package/is-html-object)
[![npm](https://img.shields.io/npm/dt/is-html-object.svg?style=flat-square)](https://www.npmjs.com/package/is-html-object)
[![npm](https://img.shields.io/npm/l/is-html-object.svg?style=flat-square)](https://www.npmjs.com/package/is-html-object)

## Install
```shell
npm install --save is-html-object
```

## API

### isHtmlObject(el|selector)
Check if `el` or `selector` is a DOM element or Browser Object
It's equivalent 
```js
isHtmlObject.htmlElement(el|selector) || isHtmlObject.browserObject(el|selector)
```
Example:
```js
// Pass a selector string
if (isHtmlObject('#root')) {
 // is valid DOM element
}
// Pass a DOM element
if (isHtmlObject(document.getElementById('root'))) {
 // is valid DOM element
}
```

### browserObject(el|selector)
Check if `el` or `selector` is an Browser Object
Browser Object includes `window`, `screen`, `document`, `navigator`, `history`, `location`
Example:
```js
if (isHtmlObject.browserObject(window)) {
	// is window object
}
// Check if `el` or `selector` is an certain object
if (isHtmlObject.screen(screen)) {
	// is screen object
}
```

### htmlElement(el|selector)
Check if `el` or `selector` is a DOM element
Example:
```js
console.log(isHtmlObject.htmlElement(window)) // false
console.log(isHtmlObject.htmlElement('body')) // true
```

Check if `el` or `selector` is an certain object
```js
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
etc.

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

console.log(isHtmlObject(window)) // true
console.log(isHtmlObject.browserObject(window)) //true
console.log(isHtmlObject.screen(screen)) // true
console.log(isHtmlObject.window(document)) // false
console.log(isHtmlObject.anchor(document.querySelector('a'))) // true
console.log(isHtmlObject.paragraph('p')) // true

if (isHtmlObject.div('#root')) {
	// is div element
}
```

## License
MIT
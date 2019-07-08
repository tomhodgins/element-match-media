# element-match-media

**Like [window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) but for HTML elements.**

## About

Parse media queries from the context of an element. 

## Usage

```js
elementMatchMedia(element, mediaQueryString)
```

- `element` is a reference to a DOM node, or a string representing a CSS selector to match with `document.querySelector()`
- `mediaQueryString` is a string containing a media query

This function evaluates the `mediaQueryString` as though the viewport's dimensions matched those of the element given to the function. It returns the [`MediaQueryList`](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) object.

Most of the time you use this you'll probably be wanting to check the `.matches` property to see whether the media query evaluates to `true` or `false`.
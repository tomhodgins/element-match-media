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

## View tests

- [test/index.html](https://tomhodgins.github.io/element-match-media/test/)

## Demos

Here are some basic demos showing different ways you might hook this plugin up to work with custom selectors or properties in CSS:

```css
.minwidth {
  --breakpoint: (min-width: 300px) {
    border-color: limegreen;
    background: greenyellow;
  };
}
```

- [Element Query Property [with Resize Observer]](https://tomhodgins.github.io/element-match-media/test/element-query-property-resize-observer.html)
- [Element Query Property [with jsincss]](https://tomhodgins.github.io/element-match-media/test/element-query-property-jsincss.html)

```css
.minwidth[--breakpoint="(min-width: 300px)"] {
  border-color: limegreen;
  background: greenyellow;
}
```

- [Element Query Selector [with Resize Observer]](https://tomhodgins.github.io/element-match-media/test/element-query-selector-resize-observer.html)
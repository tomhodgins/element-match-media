export default function(
  element = document.documentElement,
  mediaQueryString = 'screen'
) {

  // Element is either a reference to a DOM node, or a CSS selector
  element = element instanceof Element
    ? element
    : document.querySelector(element)

  // Look for <iframe id=match-media>…
  let iframe = document.querySelector('iframe#match-media')

  // If it doesn't exist, create it and attach it to the document
  if (iframe === null) {
    iframe = document.createElement('iframe')
    iframe.id = 'match-media'
    iframe.style.cssText = `
      border: none;
      position: fixed;
      transform: translate(-100vw, -100vh);
    `
    document.documentElement.appendChild(iframe)
  }

  // Check iframe dimensions
  const dimensions = element.getBoundingClientRect()

  // For both width & height, make iframe match element size
  ;['width', 'height'].forEach(dimension =>
    iframe[dimension] = dimensions[dimension]
  )

  // Why do we have to trigger something here?
  iframe.offsetWidth

  // Return result of window.matchMedia() from the window inside the iframe
  return iframe.contentWindow.matchMedia(mediaQueryString)
}
export default function(
  element = '',
  mediaQueryString = ''
) {
  element = element instanceof Element
    ? element
    : document.querySelector(element)
  let iframe = document.querySelector('iframe#match-media')
  if (iframe === null) {
    iframe = document.createElement('iframe')
    iframe.id = 'match-media'
    iframe.style.cssText = `
      border: none;
      position: fixed;
      right: -100vw;
      bottom: -100vh;
    `
    document.body.appendChild(iframe)
  }
  ['Width', 'Height'].forEach(dimension =>
    iframe[dimension.toLowerCase()] = element[`offset${dimension}`]
  )
  return iframe.contentWindow.matchMedia(mediaQueryString)
}
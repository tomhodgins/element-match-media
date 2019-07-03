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
    iframe.style.position = 'fixed'
    iframe.style.bottom = '-100vh'
    iframe.style.right = '-100vw'
    document.body.appendChild(iframe)
  }
  ['Width', 'Height'].forEach(dimension =>
    iframe[dimension.toLowerCase()] = element[`offset${dimension}`]
  )
  return iframe.contentWindow.matchMedia(mediaQueryString)
}
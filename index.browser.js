function elementMatchMedia(element, mediaQueryString) {
  element = element instanceof Element
    ? element
    : document.querySelector(element)
  mediaQueryString = mediaQueryString || ''
  var iframe = document.querySelector('iframe#match-media')
  if (iframe === null) {
    iframe = document.createElement('iframe')
    iframe.id = 'match-media'
    iframe.style.border = 'none'
    iframe.style.position = 'fixed'
    iframe.style.right = '-100vw'
    iframe.style.bottom = '-100vh'
    document.body.appendChild(iframe)
  }
  ['Width', 'Height'].forEach(function(dimension){
    return iframe[dimension.toLowerCase()] = element['offset' + dimension]
  })
  return iframe.contentWindow.matchMedia(mediaQueryString)
}
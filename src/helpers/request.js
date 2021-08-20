export const deleteRequestHeadersHost = headers => {
  delete headers.host
}

export const getRequestUrl = request => {
  const url = request.url.substring(1)
  return url.replace(/^https/g, 'http')
}

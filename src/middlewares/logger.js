/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
export const logger = (request, response, next) => {
  console.log('[REQUEST]:', request.url)

  next()
}

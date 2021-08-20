/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const logger = (req, res, next) => {
  console.log('[REQUEST]:', req.url)

  next()
}

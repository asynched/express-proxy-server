import express from 'express'

const DEFAULT_OPTIONS = {
  /** @type {import('express').IRouter} */
  router: null,
  logger: null,
  middlewares: [],
}

export function createApp(defaultOptions = DEFAULT_OPTIONS) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
  }

  const app = express()

  options.middlewares.forEach(middleware => app.use(middleware()))

  if (options.logger) {
    app.use('/', options.logger)
  }

  if (options.router) {
    app.use('/', options.router)
  }

  return app
}

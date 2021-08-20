import { json } from 'express'
import cors from 'cors'
import router from './routes'
import { createApp } from './config/app'
import { logger } from './middlewares/logger'

const app = createApp({
  router,
  logger,
  middlewares: [json, cors],
})

app.listen(3000, () => console.log('[SERVER]: ONLINE'))

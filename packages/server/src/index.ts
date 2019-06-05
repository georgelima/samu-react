import 'reflect-metadata'
import 'array-flat-polyfill'

import * as dotenv from 'dotenv'

dotenv.config()

import { createServer } from './lib/Server'
import * as Database from './config/Database'
;(async () => {
  await Database.connect()

  const app = await createServer()

  app.listen(process.env.PORT, () => {
    const env = process.env.NODE_ENV
    console.log('[Server] - Listening on', process.env.PORT, 'in', env, 'mode')
  })
})()

import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import config from './config'
import apiRouter from './api/api.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/api', apiRouter)

export const startServer = async () => {
  try {
    const { port } = await config
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`)
    })
  } catch (error) {
    console.error(error)
  }
}

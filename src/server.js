import express from 'express'
import config from './config'

export const app = express()

app.get('/api', (req, res) => {
  res.send({ message: 'SWAPI backend challenge' })
})

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

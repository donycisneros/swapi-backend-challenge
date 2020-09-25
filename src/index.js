const express = require('express')
const app = express()
const PORT = 5757

app.get('/', (req, res) => {
  res.json({ message: 'SWAPI backend challenge' })
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})

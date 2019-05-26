const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000

app.use(express.json())

// 1. Serve static file (html + client-side scripts)
app.use(express.static('public'))

// 2. Create and endpoint for moby
app.post('/getWord', (req, res) => {
  const word = req.body.word
  const words = [word]
  res.json(words)
})

app.listen(PORT, () => console.log(`Magic happening at http://localhost:${PORT}`))

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000

const getRhymingWords = require('./coolDictionary.js')
app.use(express.json())

// 1. Serve static file (html + client-side scripts)
app.use(express.static('public'))

// 2. Create and endpoint for moby
app.post('/getRhyme', (req, res) => {
  const word1 = req.body.word1
  const word2 = req.body.word2
  res.json(getRhymingWords(word1, word2))
})

app.listen(PORT, () => console.log(`Magic happening at http://localhost:${PORT}`))

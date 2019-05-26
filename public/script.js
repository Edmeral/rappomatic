
function getRhyme(word1, word2){
return fetch('/getRhyme', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({
    word1,
    word2
  }), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
  .then(res => res.map(syllabes => syllabes.join('')))
}

getRhyme('table', 'shoe').then(console.log)

function split(str) {
  return str.split(' ')
}
const form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', event => {
  event.preventDefault()
  const text = form.getElementsByTagName('textarea')[0].value
  const lines = text.trim().split('\n')
  const wordsOfLines = lines.map(split)

  const promises = []

  

  for (let i  = 0; i < lines.length - 1; i += 2) {
    const lastWorld1 = wordsOfLines[i][wordsOfLines[i].length - 1]
    const lastWorld2 = wordsOfLines[i+1][wordsOfLines[i+1].length - 1]
    
    promises.push(getRhyme(lastWorld1, lastWorld2).then(([word1, word2]) => {
      wordsOfLines[i][wordsOfLines[i].length - 1] = word1
      wordsOfLines[i+1][wordsOfLines[i+1].length - 1] = word2
    }))
  }

  Promise.all(promises).then(() => {
    document.getElementById('result').innerHTML = wordsOfLines.map(line => line.join(' '))
                            .join('<br>')
  })

  var audio = new Audio('./90bpm.mp3');
    audio.play();
})

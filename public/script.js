fetch('/getWord', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({
    word: 'house'
  }), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
  .then(console.log)


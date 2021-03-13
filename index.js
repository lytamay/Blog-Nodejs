const express = require('express')
const app = express()
const port = 3000

//router
app.get('/tintuc', (req, res) => {
  var a = 1 ;
  var b=3;
  var c = a+b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
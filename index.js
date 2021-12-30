const express = require('express')
const app = express()

app.get('/', function (req, res) {
    var a =1;
    var b=1;
    var c = a+b;
  res.send('Hello World')
})

app.listen(3000, () => {console.log(`http://localhost:3000`)})
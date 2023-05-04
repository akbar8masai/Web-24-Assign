const connectToMongo =require("./db")


const express = require('express');

connectToMongo();
const app = express()
const port = 7000

//Avaialble Routes
app.use('./api/v1/auth',require('./routes/auth'))

// app.use('./api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/login', (req, res) => {
    res.send('success log')
  })

  app.get('/api/v1/signup', (req, res) => {
    res.send('success signup')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//install npm i express
// npm i mongoose
//npm i -D nodemon
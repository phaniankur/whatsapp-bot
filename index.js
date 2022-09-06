const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const webhook = require('./routes/webhook')
const PORT = process.env.PORT

dotenv.config();

app.use(cors())
app.use(express.json())

app.use('/',webhook)

app.get('/', function (req, res) {
  res.send('Welcome to Boaters Development')
})

app.listen(PORT)
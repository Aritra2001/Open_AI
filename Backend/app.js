const { generateAnswer, generateImage } = require('./controllers/openaiController')
const express = require('express')

//app set up
const app = express()
app.listen(4000, () => console.log('listening for resquests on port 4000'))

//middleware
app.use(express.json())
app.use(express.static('../public'))

//routes
app.post('/openai/meta', generateAnswer)
app.post('/openai/image', generateImage)

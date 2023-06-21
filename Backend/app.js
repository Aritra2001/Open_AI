const { generateAnswer, generateImage } = require('./controllers/openaiController')
const express = require('express')
const cors = require('cors')


//app set up
const app = express()
app.listen(4000, () => console.log('listening for resquests on port 4000'))

//cors setup
app.use(cors({}))

//middleware
app.use(express.json())
app.use(express.static('../public'))

//routes
app.post('/openai/meta', generateAnswer)
app.post('/openai/image', generateImage)

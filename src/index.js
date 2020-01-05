const express = require('express')
require('./db/mongoose')
const dollRouter = require('./routers/doll')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(dollRouter)


app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})
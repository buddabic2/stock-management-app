const mongoose = require('mongoose')

const connectionAndDb = 'mongodb://127.0.0.1:27017/stock-management-test'
const connection = 'mongodb+srv://dawid:dawid@cluster0-ert7d.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connection || connectionAndDb, {
  useNewUrlParser: true,
  useCreateIndex: true
})
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Add date sold and bought

const dollSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  priceBought: {
    type: Number,
    required: true,
    validate (value) {
      if (value < 0) {
        throw new Error('Price cannot be negative')
      }
    }
  },
  dateBought: {
    type: String,
    default: "x"
  },
  sold: {
    type: Boolean,
    default: false
  },
  priceSold: {
    type: Number,
    default: 0
  },
  dateSold: {
    type: String,
    default: "x"
  },
  boughtBy: {
    type: String,
    default: "x"
  },
  shippingAddress: {
    type: String,
    default: "x"
  }
})

const Doll = mongoose.model('doll', dollSchema)
module.exports = Doll
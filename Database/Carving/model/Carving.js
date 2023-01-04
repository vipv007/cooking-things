const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Carving = new Schema({
  name: {
    type: String
  },
  imgurl: {
    type: String
  },
  size: {
    type: String
  },
  qty:
  {
    type:Number
  },
  price: {
    type: Number
  },


}, {
  collection: 'carving'
})

module.exports = mongoose.model('Carving', Carving)

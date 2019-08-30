const mongoose = require('mongoose');
require('../models/listing');
require('../models/review');

mongoose.connect('mongodb://localhost:27017/listings', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});
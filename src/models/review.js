const mongoose = require('mongoose');

const reviewModel = mongoose.Schema(
  {
  listingId: {type: String, required: '{PATH} is required'},
  name: {type: String, required: '{PATH} is required'},
  rating: {type: Number, required: '{PATH} is required'},
  review: String,
  submitted: {type: Date, default: Date.now}
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Review', reviewModel);
const mongoose = require('mongoose');

const reviewModel = mongoose.Schema(
  {
  _id: mongoose.Schema.Types.ObjectId,
  listingId: {type: Number, required: '{PATH} is required'},
  rating: {type: String, required: '{PATH} is required'},
  review: String,
  image: String,
  submitted: {type: Date, default: Date.now}
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Review', reviewModel);
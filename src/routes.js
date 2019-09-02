const listing = require('./api/listing.js');
const review = require('./api/review.js');

const routes = [
  // Listing
  {
    method: 'GET', 
    path: '/api/listings', 
    options: listing.all
  },
  {
    method: 'GET',
    path: '/api/listings/{listing}',
    options: listing.get
  },
  {
    method: 'POST',
    path: '/api/listings',
    options: listing.create    
  },
  {  
    method: 'PUT',
    path: '/api/listings/{listing}',
    options: listing.update
  },
  {
    method: 'DELETE',
    path: '/api/listings/{listing}',
    options: listing.remove
  },
  // Review
  {
    method: 'GET', 
    path: '/api/reviews', 
    options: review.all
  },
  {
    method: 'GET',
    path: '/api/reviews/{review}',
    options: review.get
  },
  {
    method: 'POST',
    path: '/api/reviews',
    options: review.create
  },
  {  
    method: 'PUT',
    path: '/api/reviews/{review}',
    options: review.update
  },
  {
    method: 'DELETE',
    path: '/api/reviews/{review}',
    options: review.remove
  }
];

module.exports = routes;
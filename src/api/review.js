const Review = require('./../models/review.js');
const Boom = require('boom');

const reviewApi = {
  all: {
    async handler(request, h) {
      try {
        return await Review.find({}).sort({ createdAt: 'desc' });
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  }, 
  get: {
    async handler(request, h) {
      try {
        const listing = request.params;
        console.log(listing.review);
        return await Review.find({ listingId: listing.review });
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  },
  create: {
    async handler(request, h) {
      try {
        const review = await new Review({
          listingId: request.payload.listingId,
          name: request.payload.name,
          rating: request.payload.rating,
          review: request.payload.review,
          submitted: request.payload.submitted
        });
        review.save();

        return { message: "review created", review };
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  },
  update: {
    async handler(request, h) {
      try {
        const review = request.params.review;
        const updates = request.payload;

        return { success: true, message: 'Successfully Updated' };
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  },
  remove: {
    async handler(request, h) {
      try {
        await Review.findById(request.params.review).remove();
        return { success: true, message: 'Successfully deleted' };
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  }
};

module.exports = reviewApi;
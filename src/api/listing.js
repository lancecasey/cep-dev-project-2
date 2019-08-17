const {Listing} = require('./../models/listing.js');
const Boom = require('boom');

const listingApi = {
  all: {
    async handler(request, h) {
      try {
        return await Listing.find({}).sort({ createdAt: 'desc' });
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  }, 
  get: {
    async handler(request, h) {
      try {
        const listing = request.params.listing;
        return await Listing.findOnr({ _id: listing.id });
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  },
  create: {
    async handler(request, h) {
      try {
        const listing = await new Listing({
          title: request.payload.title,
          description: request.payload.description,
          image: request.payload.image,
          city: request.payload.city
        });
        listing.save();

        return { message: "listing created", listing };
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  },
  update: {
    async handler(request, h) {
      try {
        const listing = request.params.listing;
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
        await Listing.findById(request.params.listing).remove();
        return { success: true, message: 'Successfully deleted' };
      } catch(err) {
        Boom.badImplementation(err);
      }
    }
  }
};

module.exports = listingApi;
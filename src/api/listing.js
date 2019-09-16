const Listing = require('./../models/listing.js');
const Boom = require('boom');
const fs = require('fs');

const handleFileUpload = file => {
  return new Promise((resolve, reject) => {
    const filename = file.hapi.filename;
    const data = file._data
    fs.writeFile('./upload/' + filename, data, err => {
      if(err){
        console.error("This is the error!!!!");
        reject(err);
      }
      resolve(data);
      return filename;
    });
  }).catch(err => {
    console.log(err);
  });
}

const listingApi = {
  all: {
    async handler(request, h) {
      try {
        console.log("Attempting to find the information")
        return await Listing.find({}).sort({ createdAt: "desc" })
      } catch (err) {
        Boom.badImplementation(err)
      }
    }
  },
  get: {
    async handler(request, h) {
      try {
        const listing = request.params.listing
        return await Listing.findOne({ location: listing.location })
      } catch (err) {
        Boom.badImplementation(err)
      }
    }
  },
  create: {
    async handler(request, h) {
      try {
        console.log(request.payload.image)
        const listing = await new Listing({
          title: request.payload.title,
          description: request.payload.description,
          image: {
            data: await handleFileUpload(request.payload.image),
            contentType: "image/png"
          },
          city: request.payload.city
        })
        listing.save()

        return { message: "listing created", listing }
      } catch (err) {
        Boom.badImplementation(err)
      }
    },
    payload: {
      output: "stream",
      parse: true,
      allow: "multipart/form-data",
      maxBytes: 2 * 1000 * 1000
    }
  },
  update: {
    async handler(request, h) {
      try {
        const listing = request.params.listing
        const updates = request.payload

        return { success: true, message: "Successfully Updated" }
      } catch (err) {
        Boom.badImplementation(err)
      }
    }
  },
  remove: {
    async handler(request, h) {
      try {
        await Listing.findById(request.params.listing).remove()
        return { success: true, message: "Successfully deleted" }
      } catch (err) {
        Boom.badImplementation(err)
      }
    },
    payload: {
      output: "stream",
      parse: true,
      allow: "multipart/form-data",
      maxBytes: 2 * 1000 * 1000
    }
  }
}

module.exports = listingApi;
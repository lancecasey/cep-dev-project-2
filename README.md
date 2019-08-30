# cep-dev-project-2

This goal of this project is to create a searchable list of "listings" which will display a photo, listing headline and location.

The returned list will contain clickable components that will navigate the user to the selected listing page.

The listing page will contain the listing photo, headline, short description, location, and a number of reviews.

Users will have the option to submit a review, provide a rating for their review, and upload an optional photo.

## Starting the server

The server is located within the /src folder.

from you command line, move into the src folder

```
cd {directory where you placed the package}/src
node index.js
```

You should see the server started, and running on localhost:3000

Because this application will require the use of MongoDB, open a new terminal and execute the following statement (you must have mongo installed on your machine).

```mongo start ```

This will start a mongo shell on port 27107

## Testing the API

To test the API endpoints, use Postman and perform the following tasks.

First, there will not be any data in your database so you can perform a POST method to insert some information

Method: POST
URL: localhost:3000/api/listings
```
Body: {
    title: listingName,
    description: listing description,
    image: imageURL
    city: Austin, TX
}
```

You should get the following (or something similar in return)

```
{
    "message": "listing created",
    "listing": {
        "_id": "5d690d9a82df875e681a3247",
        "title": "listingName",
        "description": "listing description",
        "image": "imageURL",
        "city": "Austin, TX"
    }
}
```

You can perform as many posts as you like, so that you can do multiple tests. I'm only including one for simplicity sake.

Method: GET
URL: localhost:3000/api/listings

This should return the following information:

```
[
    {
        "_id": "5d690d9a82df875e681a3247",
        "title": "listingName",
        "description": "listing description",
        "image": "imageURL",
        "city": "Austin, TX",
        "createdAt": "2019-08-30T11:50:50.331Z",
        "updatedAt": "2019-08-30T11:50:50.331Z",
        "__v": 0
    },
    {
        "_id": "5d68038193f7906054ac5c5c",
        "title": "listingName",
        "description": "listing description",
        "image": "imageURL",
        "city": "Austin, TX",
        "createdAt": "2019-08-29T16:55:29.600Z",
        "updatedAt": "2019-08-29T16:55:29.600Z",
        "__v": 0
    },
    {
        "_id": "5d6729493ec4f3170c74460a",
        "name": "test listing"
    }
]
```
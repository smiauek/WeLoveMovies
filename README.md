# WeLoveMovies
API project for Thinkful.

API built following RESTful design principles with PostgreSQL database for a mock WeLoveMovies website.

Mock Front-End for this API can be found in [this repository](https://github.com/smiauek/starter-movie-front-end.git)

Deployed API can be found [here](agile-lake-05280.herokuapp.com/movies)

## Supported Routes:
- `GET /movies`  
This route will respond with a list of all movies.
- `GET /movies?is_showing=true`  
This route will respond with a list of all movies that are currently playing.
- `GET /movies/:movieId`  
This route will respond with the movie where `id === :movieId` or return `404` if no matching movie is found.
- `GET /movies/:movieId/theaters`  
This route will respond with a list of all theaters where the movie is currently playing.
- `GET /movies/:movieId/reviews`  
This route will respond with a list of all the reviews for the movie, including all the critic details added to a critic key of the review.
- `PUT /reviews/:reviewId`  
This route will update the review where `id === :reviewId` or return `404` if no matching review is found.
- `DELETE /reviews/:reviewId`  
This route will delete the review where `id === :reviewId`, or return `404` if no matching review is found.
- `GET /theaters`  
This route will respond with a list of all theaters, and the movies playing at each theatre added to the movies key.


## Tech:
This app is utilizing:
- Node.js
- Express.js
- Knex.js


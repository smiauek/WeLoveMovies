const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const isShowing = req.query.is_showing;

  if (isShowing) {
    const data = await service.listShowing();
    return res.json({ data });
  }
  const data = await service.list();
  return res.json({ data });
}

async function movieExists(req, res, next) {
  const { movieId } = req.params;

  const movie = await service.read(movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  return next({ status: 404, message: "Movie cannot be found." });
}

function read(req, res, next) {
  res.json({ data: res.locals.movie });
}

async function listTheaters(req, res, next) {
  const movieId = res.locals.movie.movie_id;

  const data = await service.listTheaters(movieId);

  res.json({ data });
}

async function listReviews(req, res, next) {
  const movieId = res.locals.movie.movie_id;

  const data = await service.listReviews(movieId);

  res.json({ data });
}

module.exports = {
  movieExists,
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  listTheaters: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(listTheaters),
  ],
  listReviews: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(listReviews),
  ],
};

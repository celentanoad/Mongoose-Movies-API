var Movie = require('../models/movie');
var Performer = require('../models/performer');

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  update,
  delete: deleteOne
};

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(movie) {
    res.status(200).json(movie);
  });
}

function deleteOne(req, res) {
  Movie.findByIdAndRemove(req.params.id).then(function(movie) {
    res.status(200).json(movie);
  });
}

function index(req, res) {
  Movie.find({})
  .then(function(movies) {
    res.status(200).json(movies);
  });
}

function show(req, res) {
  Movie.findById(req.params.id).then(function(movie) {
    res.status(200).json(movie);
  });
}

function newMovie(req, res) {
  res.status(200).json(movie);
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var movie = new Movie(req.body);
  movie.save(function(err) {
    res.status(201).json(movie);
  });
}

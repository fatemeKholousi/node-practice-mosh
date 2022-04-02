const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genre");

///....in mongoose schema we have what mongodb would tell us
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  genre: { type: genreSchema, required: true },
  numberInStock: { type: Number, required: true, min: 0, max: 255 },
  dailyRentalRate: { type: Number, required: true, min: 0, max: 255 },
});

const Movie = mongoose.model("crud-movies", movieSchema);

///....in joi schema we have what client would tell us
const validateMovie = (movie) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    //genreId is the only thing we want from client
    genreId: Joi.string().Joi.required(),
    numberInStock: Joi.number().min(0).max(50).required(),
    dailyRentalRate: Joi.number().min(5).max(50).required(),
  });
  return schema.validate(movie);
};

exports.validateMovie = validateMovie;
exports.Movie = Movie;

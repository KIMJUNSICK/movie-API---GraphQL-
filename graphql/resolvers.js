import { getMovies, getMovie, getMovieSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getMovieSuggestions(id)
  }
};

export default resolvers;

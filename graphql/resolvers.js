import { getMovies, getMovie, getMovieSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating, sort }) => getMovies(limit, rating, sort),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getMovieSuggestions(id)
  }
};

export default resolvers;

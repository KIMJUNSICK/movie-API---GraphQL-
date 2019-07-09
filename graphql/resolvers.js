import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (__, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (__, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;

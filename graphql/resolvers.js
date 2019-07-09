import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (__, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (__, { name, score }) => addMovie(name, score),
    deleteMovie: (__, { id }) => deleteMovie(id)
  }
};

export default resolvers;

import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { sort, limit }) => getMovies(sort, limit)
  }
};

export default resolvers;

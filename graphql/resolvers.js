import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (__, { id }) => getById(id)
  }
};

export default resolvers;

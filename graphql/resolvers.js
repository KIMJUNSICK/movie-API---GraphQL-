const junsik = {
  name: "junsik",
  age: 25,
  city: "icheon",
  sex: "male"
};

const resolvers = {
  Query: {
    person: () => junsik
  }
};

export default resolvers;

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    synopsis: String
    language: String
    description_intro: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers
});

server.start(() =>
  console.log("GraphQL Server Running on ✅  http://localhost:4000")
);

import { GrapghQLServer } from "graphql-yoga";

const server = new GrapghQLServer({});

server.start(() => console.log("GraphQL Server Running"));

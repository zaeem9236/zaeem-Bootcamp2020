const { ApolloServer, gql } = require('apollo-server');

let PeopleData = [
    {
        "name": "Zaeem",
        "age": 26,
        "gender": "male",
    },
    {
        "name": "bisma",
        "age": 27,
        "gender": "female",
    }
]


const resolvers = {
    Query: {
        getBio: () => PeopleData,
    },
};


// schema (types of data + types of query)
const typeDefs = gql`
  type BioData {
    name: String
    age: Int
    gender: String
  }


  type Query {
    getBio: [BioData]
  }

`;


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
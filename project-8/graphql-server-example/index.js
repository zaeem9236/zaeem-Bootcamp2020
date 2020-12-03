const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "Id":0,
        "name": "Ali",
        "email": "ali@gmail.com",
        "age": 21,
    },
    {
        "Id":1,
        "name": "Zaeem",
        "email": "Zaeem@gmail.com",
        "age": 26,
    }
]


const resolvers = {
    Query: {
        students: () => students,
    },
};

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
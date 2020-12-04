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
        // write Businees Logic here
    },
    Mutation: {
      addPrsn: (_, {input}) => {
        PeopleData.push(
          {
            name: input.name,
            age: input.age,
            gender: input.gender
          }
        )
        return (input);
      }
    } 
};


// schema (types of data + types of query)
const typeDefs = gql`
  type BioData {
    name: String
    age: Int
    gender: String
  }

  input prsnInput {
    name: String
    age: Int
    gender: String
  }

  type Query {
    getBio: [BioData]
  }

  type Mutation {
    addPrsn (input: prsnInput): BioData
  }

`;


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { couldStartTrivia } from 'typescript';

const GetPeople = gql`
  query GetAllPeople {
    getBio {
      name
    }
  }
`;

// const ADD_Student = gql`
// mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
//   addStudent(
//       input: {id: $id, name: $name, email: $email, age: $age}
//   ) {
//     id
//     name
//   }
// }
// `;

function Peoples(){
 const { loading, error, data} = useQuery(GetPeople);

 if (loading){
   return (<h1>Loading...</h1>)
 }else if (error){
   return (<h1>Error...</h1>)
 }

 console.log(data,"Data from GraphQL server");

    return(
        <div>
          <h1>I am peoples component</h1>
        </div>
    );
    
  }
export default Peoples;
import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

// const Get_students = gql`
//   query GetAllStudents {
//     students {
//       name
//     }
//   }
// `;

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


    return(
        <div>
          <h1>I am peoples component</h1>
        </div>
    );
    
  }
export default Peoples;
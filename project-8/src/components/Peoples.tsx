import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { couldStartTrivia } from 'typescript';

const GetPeople = gql`
  query GetAllPeople {
    getBio {
      name,
      age,
      gender
    }
  }
`;

const ADD_Person = gql`
  mutation AddPerson($name: String!, $age: Int!, $gender: String!) {
    addPrsn( 
      input: {name: $name,  age: $age, gender: $gender}
    ) {
      name
      age
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

function Peoples() {
  const { loading, error, data } = useQuery(GetPeople);
  const [addPersonAction] = useMutation(ADD_Person)

  if (loading) {
    return (<h1>Loading...</h1>)
  } else if (error) {
    return (<h1>Error...</h1>)
  }

  let { getBio } = data;
  //  console.log(getBio,"Data from GraphQL server");
  return (
    <div>
      <table >
        {
          getBio.map(function (dataObject: { name: string, age: number, gender: String }, index: number) {
            return (
              <tr key={index}>
                <td>{dataObject.name}</td>
                <td>{dataObject.age}</td>
                <td>{dataObject.gender}</td>
              </tr>
                )
              })
        }
      </table>

        <button onClick={()=>{
          addPersonAction({variables:{name:"Hassan",age:39,gender:"male"}})
        }}>Click here to ADD person</button>

    </div>
  );

}
export default Peoples;
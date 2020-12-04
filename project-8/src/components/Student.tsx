import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const Get_students = gql`
  query GetAllStudents {
    students {
      name
    }
  }
`;

const ADD_Student = gql`
mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
  addStudent(
      input: {id: $id, name: $name, email: $email, age: $age}
  ) {
    id
    name
  }
}
`;

function Student(){
    const { loading, error, data } = useQuery(Get_students);
    const [addStd] = useMutation(ADD_Student);


    if (loading){
        return <h1>Loading...</h1>
    }else if (error){
        return <h1>Error</h1>
    }
    let{ students } = data;
    return(
        <div>
           { students.map(function(name: { name: any; }, index:number){ 
               return(<tr key={index}>
                   <td>{name.name}</td>
                   {console.log(name.name)}
               </tr>)
        }) }
    <button onClick={()=>
      addStd({variables: {id:4, email:"talha@talha",age: 35, name:"talha"}  })
    }>add student</button>

        </div>
    );
    
  }
export default Student;
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Get_students = gql`
  query GetAllStudents {
    students {
      name
    }
  }
`;

function Student(){
    const { loading, error, data } = useQuery(Get_students);

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
        </div>
    );
}

export default Student;
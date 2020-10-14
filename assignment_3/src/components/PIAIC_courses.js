import React from 'react';

function PIAIC_courses(props){
    return(
        <React.Fragment>
            <div>
    <h3>Program: {props.name} Instructor: {props.instructor} Duration: {props.duration} year</h3>
            </div>
        </React.Fragment>
    );
}

export default PIAIC_courses;
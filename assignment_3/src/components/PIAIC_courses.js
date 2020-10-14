import React from 'react';

function PiaicCourses(props) {
    return (
        <React.Fragment>
            <div>
                <h3>Program: {props.name} | Instructor: {props.instructor} | Duration: {props.duration} year</h3>
            </div>
        </React.Fragment>
    );
}

export default PiaicCourses;
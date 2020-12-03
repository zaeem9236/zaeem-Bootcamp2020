import React from 'react';

function TimerButton(props: { ButtonAction: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; ButtonValue: React.ReactNode; }){
    // console.log(props)
    return(
        <div>
            <button onClick={props.ButtonAction}>{props.ButtonValue}</button>
        </div>
    );
}

export default TimerButton;
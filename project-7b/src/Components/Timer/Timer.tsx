import React from 'react';
import TimerButton from '../TimerButton/TimerButton';

function startTimer(){
    console.log('timer started wala function')
}

function stopTimer(){
    console.log('timer stop wala function')
}

function resetTimer(){
    console.log('timer reset wala function')
}

function Timer(){
    return(
        <div>
            <h1>I am timer component</h1>
            <div className='start_timer'>
            <TimerButton  ButtonAction={startTimer} ButtonValue='startTimer'></TimerButton></div>
            <TimerButton ButtonAction={stopTimer} ButtonValue='stopTimer'></TimerButton>
            <TimerButton ButtonAction={resetTimer} ButtonValue='resetTimer'></TimerButton>
        </div>
    );
}


export default Timer;
import React, { useState, useEffect } from 'react';
import '../App.css';
import income from '../Images/income.png';
import useWebAnimations from "@wellyshen/use-web-animations";


function FourthPage() {

    const illustration3_animation = useWebAnimations();
    var illustration_animation_keyframes = {
        transform: ["rotate(4deg)","rotate(-4deg)"], 
        };

    var illustration_animation_timings = {
            // delay: 0, // Start with a 500ms delay
            duration: 1600, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            // easing: "ease-in-out", // Use a fancy timing function
    }

    useEffect(() => {
        illustration3_animation.animate({ keyframes: illustration_animation_keyframes, timing: illustration_animation_timings,});
    }, []);
    // let [scrollY, setScrollY] = useState(0);

    // window.addEventListener("resize",()=>{
    //     // console.log(window.screen.width,'media Query width');
    //   });

    window.addEventListener('scroll', () => {
        //   setScrollY(window.scrollY);
        //   console.log(window.scrollY,'Scroll') ;
        // console.log(document.getElementsByClassName('second_page')[0].getBoundingClientRect(),'top')
        // console.log(isInViewport('home_page'), 'viewport');

    });
    let [scrollY, setScrollY] = useState(0);
    // window.addEventListener("resize",()=>{
    //     // console.log(window.screen.width,'media Query width');
    //   });

    //   window.addEventListener('scroll',()=> { 
    //       setScrollY(window.scrollY);
    //     //   console.log(window.scrollY,'Scroll') ;
    //     });
    return (
        <React.Fragment>
            <div className='fourth_page'>
                <div className='fourth_page_description'>
                    {/* <p>{window.scrollY}</p> */}
                    <p className='fourth_page_desc_heading'>Heading</p>
                    <p className='fourth_page_desc_text'>simply put, IoT is about connecting machines or, as we refer to them, 'things' that were previously 'dumb objects', (think everything from your toaster to a security camera), to the internet in order to transmit the data they collect, monitor them and enable them to 'talk to each other'.</p>
                </div>
                
                <div className='fourth_page_illustration'>
                    <img ref={illustration3_animation.ref} className='fourth_iot_pic' src={income} alt='' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FourthPage;
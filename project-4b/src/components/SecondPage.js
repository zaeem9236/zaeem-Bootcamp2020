import React, { useState, useEffect } from 'react';
import '../App.css';
import iot_pic from '../Images/what_is_iot.png';
import useWebAnimations from "@wellyshen/use-web-animations";


function isInViewport(element) {
    const rect = document.getElementsByClassName(element)[0].getBoundingClientRect();
    return (
        rect.y < 100 && rect.y > (-100)
    );
}


function SecondPage() {
    const illustration1_animation = useWebAnimations();
    var illustration_animation_keyframes = {
        transform: ["translateY(50px)"], 
        };

    var illustration_animation_timings = {
            // delay: 0, // Start with a 500ms delay
            duration: 1600, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            // easing: "ease-in-out", // Use a fancy timing function
    }

    useEffect(() => {
        illustration1_animation.animate({ keyframes: illustration_animation_keyframes, timing: illustration_animation_timings,});
    }, []);
    let [scrollY, setScrollY] = useState(0);

    // window.addEventListener("resize",()=>{
    //     // console.log(window.screen.width,'media Query width');
    //   });

    window.addEventListener('scroll', () => {
        //   setScrollY(window.scrollY);
        //   console.log(window.scrollY,'Scroll') ;
        // console.log(document.getElementsByClassName('second_page')[0].getBoundingClientRect(),'top')
        console.log(isInViewport('home_page'), 'viewport');

    });
    return (
        <React.Fragment>
            <div className='second_page'>
                <div className='second_page_description'>
                    {/* <p>{window.scrollY}</p> */}
                    {/* {console.log(isInViewport(2),'viewport')} */}
                    <p  className='second_page_desc_heading'>Internet of Things</p>
                    <p  className='second_page_desc_text'>Simply put, IoT is about connecting machines or, as we refer to them, 'things' that were previously 'dumb objects', (think everything from your toaster to a security camera), to the internet in order to transmit the data they collect, monitor them and enable them to 'talk to each other'.</p>
                </div>

                <div className='second_page_illustration'>
                    <img ref={illustration1_animation.ref} className='second_iot_pic' src={iot_pic} alt='' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SecondPage;
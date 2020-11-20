import React, { useState,useEffect } from 'react';
import '../App.css';
import benifits from '../Images/benifits.png';
import useWebAnimations from "@wellyshen/use-web-animations";


function ThirdPage() {
    const illustration3_animation = useWebAnimations();
    var illustration_animation_keyframes = {
        opacity: ["0.8","1"], 
        transform: ["scale(1)","scale(1.1)"], 
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
            <div className='third_page'>
                <div className='third_page_illustration'>
                    <img ref={illustration3_animation.ref} className='third_iot_pic' src={benifits} alt='' />
                </div>

                <div className='third_page_description'>
                    {/* <p>{window.scrollY}</p> */}
                    <p className='third_page_desc_heading'>Benifits</p>
                    <ul className='third_page_desc_text' >
                        <li>Reduction in Operational Cost</li>
                        <li>Enhanced Security Measures </li>
                        <li>achieve Customer Centricity</li>
                        <li>Gathering Rich Data</li>
                        <li>Remote Operations</li>
                    </ul>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default ThirdPage;
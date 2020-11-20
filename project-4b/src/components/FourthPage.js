import React, { useState } from 'react';
import '../App.css';
import iot_pic from '../Images/what_is_iot.png';

function FourthPage() {
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
                    <img className='iot_pic' src={iot_pic} alt='' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FourthPage;
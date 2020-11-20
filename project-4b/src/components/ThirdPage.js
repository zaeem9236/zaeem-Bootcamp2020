import React, { useState } from 'react';
import '../App.css';
import iot_pic from '../Images/what_is_iot.png';

function ThirdPage() {
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
                    <img className='iot_pic' src={iot_pic} alt='' />
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
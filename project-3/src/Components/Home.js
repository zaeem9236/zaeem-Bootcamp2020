import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    
    return (
        <div className='home_page'>
            <p className='welcome_message'>Welcome to Joo-tay</p>
            <div className='button_div'>
                <Link to="/products"><button className='explore_button'>Explore</button></Link>
            </div>
        </div>
    );
}

export default Home;
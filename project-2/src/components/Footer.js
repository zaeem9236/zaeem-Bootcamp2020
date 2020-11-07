import React from 'react';

function Footer(){
    const footer_style={
        div:{
            backgroundColor: 'rgba(18, 48, 88, 0.967)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        p:{
            padding: '15px 0px',
            color: 'white',
            fontSize: '15px',
            letterSpacing: '2px'
        }
    };
    return(
        <React.Fragment>
            <div style={footer_style.div}>
                <p style={footer_style.p}>Mady by Zaeem Ahmad | PIAIC71842 (Internet Of Things)</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;
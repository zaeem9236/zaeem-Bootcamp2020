import React from 'react';
import Child1 from '../Child1/Child1.js';
import Child2 from '../Child2/Child2.js';
import './Parent.css';


function Parent() {
    return (
        <React.Fragment>
            <div className='parent'>
                <div className='child1'>
                    <Child1 />
                </div>

                <div className='child2'>
                    <Child2 />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Parent;
import React,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShoesData from '../ShoesData';

function SingleProductView(){
    const { id } = useParams();
    let products = useContext(ShoesData);

    return(
        <div>
            
        </div>
    );
}

export default SingleProductView;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import SingleProductView from './SingleProductView';
import Cart from './Cart';


function Routing() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:id' component={SingleProductView} />
                <Route exact path='/cart' component={Cart} />
            </Switch>
        </React.Fragment>
    );
}

export default Routing;
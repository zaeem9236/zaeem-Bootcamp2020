import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';


function Routing() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={CompA} />
                <Route exact path='/compb/:id' component={CompB} />
                <Route exact path='/compc' component={CompC} />
            </Switch>
        </React.Fragment>
    );
}

export default Routing;
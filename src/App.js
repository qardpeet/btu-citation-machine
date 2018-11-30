import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

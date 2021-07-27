import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => {

    console.log('dashjuiasdj', isAuthenticated())
    return (
        <BrowserRouter>
            <Switch>
                {isAuthenticated() ? (
                    <PrivateRoute path="/" component={() => <h1>App</h1>} />
                ) : (
                    <Route path="/" component={Cadastro} />
                )
                }
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
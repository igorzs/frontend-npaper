import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/Cadastro';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/npaper/" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}
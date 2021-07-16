import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import CadastroReceitas from './Pages/CadastroReceitas';
import ListaReceitas from './Pages/ListaReceitas';


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/cadastroreceitas">
                    <CadastroReceitas />
                </Route>
                <Route exact path="/listareceitas">
                    <ListaReceitas />
                </Route>
            </Switch>
        )
    }
}

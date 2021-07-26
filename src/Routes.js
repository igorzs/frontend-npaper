import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import ListaReceitas from './Pages/ListaReceitas';
import IncluirReceitas from './Pages/IncluirReceitas';
import ListaDespesas from './Pages/ListaDespesas';
import IncluirDespesas from './Pages/IncluirDespesas';


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/incluirreceitas">
                    <IncluirReceitas />
                </Route>
                <Route exact path="/listareceitas">
                    <ListaReceitas />
                </Route>
                <Route exact path="/incluirdespesas">
                    <IncluirDespesas />
                </Route>
                <Route exact path="/listadespesas">
                    <ListaDespesas />
                </Route>
            </Switch>
        )
    }
}

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import ListaReceitas from './pages/receita/ListaReceitas';
import IncluirReceitas from './pages/receita/IncluirReceitas';
import ListaDespesas from './pages/despesa/ListaDespesas';
import IncluirDespesas from './pages/despesa/IncluirDespesas';


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

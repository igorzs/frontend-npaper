import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CadastroLogin from './pages/CadastroLogin';
import Inicial from './pages/TelaInicial';
import DashboardInicial from './pages/DashboardInicial';
import ListaDespesas from './pages/ListaDespesas';
import ListaReceitas from './pages/ListaReceitas';
import IncluirDespesas from './pages/IncluirDespesas';
import IncluirReceitas from './pages/IncluirReceitas';
import EditarReceita from './pages/EditarReceita';
import EditarDespesa from './pages/EditarDespesa';
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
    return (
        <BrowserRouter>
            {isAuthenticated() ? (
                <Switch>
                    <Route path="/lista-despesas" component={ListaDespesas} />
                    <Route path="/incluir-despesa" component={IncluirDespesas} />
                    <Route path="/incluir-receita" component={IncluirReceitas} />
                    <Route path="/lista-receitas" component={ListaReceitas} />
                    <Route path="/editar-receita/:receitaId" component={EditarReceita} />
                    <Route path="/editar-despesa/:despesaId" component={EditarDespesa} />
                    <PrivateRoute path="/" component={DashboardInicial} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/lista-despesas" component={ListaDespesas} />
                    <Route path="/incluir-despesa" component={IncluirDespesas} />
                    <Route path="/incluir-receita" component={IncluirReceitas} />
                    <Route path="/lista-receitas" component={ListaReceitas} />
                    <Route path="/" component={CadastroLogin} />
                </Switch>
            )
            }
        </BrowserRouter>
    );
}

export default Routes;
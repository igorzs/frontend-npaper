import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';

export default class ListaReceitas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receita: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/receita`)
            .then(receita =>
                receita.json().then(receita => this.setState({ receita }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { receita } = this.state;
        return (
            <div>
                <Header />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: '1302.4px' }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Receitas</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Listagem de Receitas</h3>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 10 }}>ID</th>
                                                        <th>Descrição</th>
                                                        <th>Valor (R$)</th>
                                                        <th>Data</th>
                                                        <th>Recebido</th>
                                                        <th>Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {this.state.receita.map((item, index) => (
                                                        <tr>
                                                            <td>{item.id}</td>
                                                            <td>{item.descricao}</td>
                                                            <td>R$ {item.valor}</td>
                                                            <td>{item.data}</td>
                                                            <td>{String(item.situacao)}</td>
                                                            <td><Link to={`/lancamento/${item.id}`}> Acessar </Link></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}
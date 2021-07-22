import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ListaReceitas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receita: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3003/home/receita`)
            .then(receita =>
                receita.json().then(receita => this.setState({ receita }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { receita } = this.state;

        return receita.map((receita, index) => (
            <div className="receita-list">
                <div key={index}>
                    <h5>{receita.descricao}</h5>
                    <article>
                        <strong> {receita.valor} </strong>
                        <p> <Link to={`/receita/${receita.id}`}> Acessar </Link> </p>
                        <br />
                    </article>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <div className="content-wrapper" style={{ minHeight: '1302.4px' }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Simple Tables</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Listagem de Receitas</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Listagem de Receitas</h3>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 10 }}>#</th>
                                                        <th>Nome Coluna 1</th>
                                                        <th>Nome Coluna 2</th>
                                                        <th style={{ width: 40 }}>Nome Coluna 3</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Inicio de foreach*/}
                                                    <tr>
                                                        <td>1.</td>
                                                        <td>Update software</td>
                                                        <td>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                                            </div>
                                                        </td>
                                                        <td><span className="badge bg-danger">55%</span></td>
                                                    </tr>
                                                    {/* Fim de foreach*/}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}
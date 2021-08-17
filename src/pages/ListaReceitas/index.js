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
                                <section class="col-lg-3">
                                    <div className="row">
                                        <div className="col-lg-12 col-6">
                                            <div className="small-box bg-success">
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>53,98</h3>
                                                    <p>Receitas Pendentes</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="fas fa-arrow-circle-up" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-6">
                                            <div className="small-box bg-success">
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>1.200,00</h3>
                                                    <p>Receitas Recebidas</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="fas fa-arrow-circle-down" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-6">
                                            <div className="small-box bg-success">
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>1.200,00</h3>
                                                    <p>Total</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="fas fa-dollar-sign" />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </section>
                                <section class="col-lg-9">

                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-6">
                                                <Link to="/incluir-receita" type="button" class="btn btn-success btn-sm"><i class="nav-icon far fa-plus-square"></i> Adicionar Receita </Link> <br /> <br />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Listagem de Receitas</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 select2-success" data-dropdown-css-class="select2-success" style={{width: '100%'}}>
                                                            <option selected="selected">Selecione o Mês</option>
                                                            <option value="janeiro">Janeiro</option>
                                                            <option value="fevereiro">Fevereiro</option>
                                                            <option value="marco">Março</option>
                                                            <option value="abril">Abril</option>
                                                            <option value="maio">Maio</option>
                                                            <option value="junho">Junho</option>
                                                            <option value="julho">Julho</option>
                                                            <option value="agosto">Agosto</option>
                                                            <option value="setembro">Setembro</option>
                                                            <option value="outubro">Outubro</option>
                                                            <option value="novembro">Novembro</option>
                                                            <option value="dezembro">Dezembro</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                </div>

                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 10 }}>ID</th>
                                                            <th>Descrição</th>
                                                            <th>Valor (R$)</th>
                                                            <th>Data</th>
                                                            <th>Recebido</th>
                                                            <th>Ações</th>
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
                                                                <td><Link to={`/lancamento/${item.id}`}> <i class="nav-icon far fa-edit"></i> Acessar </Link></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';

export default class IncluirDespesas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            despesa: {
                descricao: "",
                valor: "",
                data: "",
                situacao: "true",
                tipo: 2
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/lista-despesas" />;
        } else {
            return (

                <div>
                    <Header />
                    <Menu />
                    <div className="content-wrapper" style={{ minHeight: '1345.6px' }}>
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Nova Despesa</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Incluir</h3>
                                            </div>

                                            <form className="form-despesa" onSubmit={this.handleSubmit}>

                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label for="descricao">Descrição</label>
                                                                <input
                                                                    type="text"
                                                                    id="descricao"
                                                                    name="descricao"
                                                                    placeholder="Descrição"
                                                                    minLength="3"
                                                                    maxLength="100"
                                                                    class="form-control"
                                                                    required
                                                                    value={this.state.despesa.descricao}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="form-group">
                                                                <label for="descricao">Valor</label>
                                                                <input
                                                                    type="text"
                                                                    id="valor"
                                                                    name="valor"
                                                                    placeholder="Valor"
                                                                    class="form-control"
                                                                    required
                                                                    value={this.state.despesa.valor}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div class="form-group">
                                                                <label for="data">Data</label>
                                                                <input
                                                                    type="date"
                                                                    id="data"
                                                                    name="data"
                                                                    class="form-control"
                                                                    placeholder="Data"
                                                                    required
                                                                    value={this.state.despesa.dataNascimento}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div class="form-group">
                                                                <label for="data">Situação</label><br />
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="situacao"
                                                                        value="true"
                                                                        //checked={this.state.despesa.ativo === "true"}
                                                                        onChange={this.handleInputChange}
                                                                    />
                                                                    Recebido &nbsp;   &nbsp;
                                                                </label>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="false"
                                                                        name="situacao"
                                                                        //checked={this.state.despesa.ativo === "false"}
                                                                        onChange={this.handleInputChange}
                                                                    />
                                                                    Não Recebido
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-12">
                                                            <button type="submit" className="btn btn-primary">Incluir</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <Footer />
                </div>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            despesa: { ...prevState.despesa, [name]: value }
        }));
    };

    handleSubmit = event => {
        fetch("http://localhost:3001/api/lancamento", {
            method: "post",
            body: JSON.stringify(this.state.despesa),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}
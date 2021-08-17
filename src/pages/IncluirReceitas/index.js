import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';

export default class IncluirReceitas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receita: {
                descricao: "",
                valor: "",
                data: "",
                situacao: "true",
                tipo: 1
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
            return <Redirect to="/lista-receitas" />;
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
                                        <h1>Nova Receita</h1>
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
                                                <h3 className="card-title">Incluir Receita</h3>
                                            </div>

                                            <form className="form-receita" onSubmit={this.handleSubmit}>
                                                <div class="card-body">

                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label for="descricao">Descrição</label>
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    id="descricao"
                                                                    name="descricao"
                                                                    placeholder="Descrição"
                                                                    minLength="3"
                                                                    maxLength="100"
                                                                    required
                                                                    value={this.state.receita.descricao}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>    
                                                    </div>
                                                
                                                    
                                                    <div className="receita-insert">
                                                        <label htmlFor="valor">Valor </label>
                                                        <br />
                                                        <input
                                                            type="text"
                                                            id="valor"
                                                            name="valor"
                                                            placeholder="Valor"
                                                            required
                                                            value={this.state.receita.valor}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="receita-insert">
                                                        <label htmlFor="data">Data</label>
                                                        <br />
                                                        <input
                                                            type="date"
                                                            id="data"
                                                            name="data"
                                                            placeholder="Data"
                                                            required
                                                            value={this.state.receita.dataNascimento}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="receita-insert">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="situacao"
                                                                value="true"
                                                                //checked={this.state.receita.ativo === "true"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            Recebido
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value="false"
                                                                name="situacao"
                                                                //checked={this.state.receita.ativo === "false"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            Não Recebido
                                                        </label>
                                                    </div>


                                                    <button type="submit" className="btn btn-primary">
                                                        Incluir
                                                    </button>
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
            receita: { ...prevState.receita, [name]: value }
        }));
    };

    handleSubmit = event => {
        fetch("http://localhost:3001/api/lancamento", {
            method: "post",
            body: JSON.stringify(this.state.receita),
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
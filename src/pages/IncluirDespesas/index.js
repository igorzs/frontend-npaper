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
                                                <fieldset>
                                                    <legend>Incluir Despesa</legend>
                                                    <div className="despesa-insert">
                                                        <label htmlFor="nome">Descrição </label>
                                                        <br />
                                                        <input
                                                            type="text"
                                                            id="descricao"
                                                            name="descricao"
                                                            placeholder="Descrição"
                                                            minLength="3"
                                                            maxLength="100"
                                                            required
                                                            value={this.state.despesa.descricao}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="despesa-insert">
                                                        <label htmlFor="valor">Valor </label>
                                                        <br />
                                                        <input
                                                            type="text"
                                                            id="valor"
                                                            name="valor"
                                                            placeholder="Valor"
                                                            required
                                                            value={this.state.despesa.valor}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="despesa-insert">
                                                        <label htmlFor="data">Data</label>
                                                        <br />
                                                        <input
                                                            type="date"
                                                            id="data"
                                                            name="data"
                                                            placeholder="Data"
                                                            required
                                                            value={this.state.despesa.dataNascimento}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="despesa-insert">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="situacao"
                                                                value="true"
                                                                //checked={this.state.despesa.ativo === "true"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            Pago
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value="false"
                                                                name="situacao"
                                                                //checked={this.state.despesa.ativo === "false"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            Não Pago
                                                        </label>
                                                    </div>


                                                    <button type="submit" className="btn btn-primary">
                                                        Incluir
                                                    </button>
                                                </fieldset>
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
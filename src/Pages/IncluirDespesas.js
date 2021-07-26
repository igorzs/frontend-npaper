import React, { Component } from "react";
import { Redirect } from "react-router-dom";


export default class IncluirDespesas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            despesa: {
                descricao: "",
                valor: "",
                data: "",
                recebido: "true"
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
            return <Redirect to="/listadespesas" />;
        } else {
            return (

                <div>

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


                <form onSubmit={this.handleSubmit}>
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
                                    name="recebido"
                                    value="true"
                                    //checked={this.state.despesa.ativo === "true"}
                                    onChange={this.handleInputChange}
                                />
                                Recebido
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    name="recebido"
                                    //checked={this.state.despesa.ativo === "false"}
                                    onChange={this.handleInputChange}
                                />
                                Não Recebido
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
        console.log(value);
    };

    handleSubmit = event => {
        console.log("entrou aqui")
        fetch("http://localhost:3001/home/despesa", {
            method: "post",
            body: JSON.stringify(this.state.despesa),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                console.log(data)
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
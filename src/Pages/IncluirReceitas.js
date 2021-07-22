import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

export default class IncluirReceitas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receita: {
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
            return <Redirect to="/listareceitas" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Incluir Receita</legend>
                        <div className="receita-insert">
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
                                value={this.state.receita.descricao}
                                onChange={this.handleInputChange}
                            />
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
                                    name="recebido"
                                    value="true"
                                    checked={this.state.receita.ativo === "true"}
                                    onChange={this.handleInputChange}
                                />
                                Recebido
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    name="recebido"
                                    checked={this.state.receita.ativo === "false"}
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
        console.log(value);
    };

    handleSubmit = event => {
        fetch("http://localhost:3003/home/receita", {
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
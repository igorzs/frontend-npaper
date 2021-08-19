import React, { Component, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';
const axios = require('axios');

const EditarReceita = () => {
    const { receitaId } = useParams();
    const [receita, setReceita] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:3001/api/lancamento/${receitaId}`)
            .then(function (response) {
                setReceita(response.data);
            })
            .catch(function (error) {
                setErro(error);
                console.log(error);
            })
    }, [receitaId]);

    console.log('rerere', receita.data);

    const [erro, setErro] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const exibeErro = () => {

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }

    const handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setReceita(prevState => ({
            receita: { ...prevState.receita, [name]: value }
        }));
    };

    const handleSubmit = event => {
        fetch(`http://localhost:3001/api/lancamento/${receitaId}`, {
            method: "put",
            body: JSON.stringify(receita),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    setRedirect(true);
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            setErro(data.error);
                        }
                    });
                }
            })
            .catch(erro => setErro(erro));

        event.preventDefault();
    };

    if (redirect) {
        return <Redirect to="/lista-receitas" />;
    } else {
        return (

            <div>
                <Header />
                <Menu />
                <div className="content-wrapper" style={{ marginTop: '25px', minHeight: '1345.6px' }}>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Edição</h3>
                                        </div>

                                        <form className="form-receita" onSubmit={handleSubmit}>

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
                                                                value={receita.descricao}
                                                                onChange={handleInputChange}
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
                                                                value={receita.valor}
                                                                onChange={handleInputChange}
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
                                                                value={receita.data}
                                                                onChange={handleInputChange}
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
                                                                    checked={receita.situacao}
                                                                    onChange={handleInputChange}
                                                                />
                                                                Recebido &nbsp;   &nbsp;
                                                            </label>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    value="false"
                                                                    name="situacao"
                                                                    checked={!receita.situacao}
                                                                    onChange={handleInputChange}
                                                                />
                                                                Não Recebido
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12">
                                                        <button type="submit" className="btn btn-primary">Confirmar</button>
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

export default EditarReceita;
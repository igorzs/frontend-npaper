import React, { Component} from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';
import { Button } from '@material-ui/core';

export default class ListaReceitas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receita: [],
            erro: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/receita`)
            .then(receita =>
                receita.json().then(receita => this.setState({ receita }))
            )
            .catch(erro => this.setState({ erro }));       
    }

    renderizaSoma(status) {
        if (status === "pendente") {
            const arrayDeValores = this.state.receita?.filter((item) => { if (!item.situacao) return true }).map((item) => item.valor)
            const somaReceitasPendentes = arrayDeValores.length > 0 && arrayDeValores.reduce((total, valor) => total += valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaReceitasPendentes
        }
        if (status === "recebido") {
            const arrayDeValores = this.state.receita?.filter((item) => { if (item.situacao) return true }).map((item) => item.valor)
            const somaReceitasRecebidas = arrayDeValores.length > 0 && arrayDeValores.reduce((total, valor) => total += valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaReceitasRecebidas
        }
        if (status === "total") {
            const arrayDeValores = this.state.receita?.map((item) => item.valor)
            const somaReceitasTotal = arrayDeValores.length > 0 && arrayDeValores.reduce((total, valor) => total += valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaReceitasTotal
        }
    }

    handleClick = (event) => {
        if(event.target.innerText.replace(" ", "") === "Excluir"){
            
            console.log(event.target.id);

            fetch(`http://localhost:3001/api/lancamento/${event.target.id}`, {
            method: "delete",
            headers: { "Content-Type": "application/json"
            }}).then(data => {
                console.log(data);
                window.location.reload();
            }).catch(erro => this.setState({ erro }));
        }
    }

    render() {
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
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>{this.renderizaSoma("pendente")}</h3>
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
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>{this.renderizaSoma("recebido")}</h3>
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
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>{this.renderizaSoma("total")}</h3>
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
                                                    <div className="col-10">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="far fa-calendar-alt" />
                                                            </span>
                                                            </div>
                                                            <input type="text" className="form-control float-right" id="reservation" />
                                                        </div>

                                                        {/*<div className="form-group">
                                                            <select className="form-control select2 select2-success" data-dropdown-css-class="select2-success" style={{ width: '100%' }}>
                                                                <option selected="selected">Selecione o Mês</option>
                                                                <option value="01">Janeiro</option>
                                                                <option value="02">Fevereiro</option>
                                                                <option value="03">Março</option>
                                                                <option value="04">Abril</option>
                                                                <option value="05">Maio</option>
                                                                <option value="06">Junho</option>
                                                                <option value="07">Julho</option>
                                                                <option value="08">Agosto</option>
                                                                <option value="09">Setembro</option>
                                                                <option value="10">Outubro</option>
                                                                <option value="11">Novembro</option>
                                                                <option value="12">Dezembro</option>
                                                            </select>
        </div>*/}
                                                    </div>
                                                    <div className="col-2">
                                                        <Link to="/incluir-receita/05" type="button" class="btn btn-success btn-sm">Buscar </Link>
                                                    </div>
                                                </div>

                                                <br/>

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
                                                                <td>R$ {item.valor},00</td>
                                                                <td>{item.data.replace('T00:00:00.000Z', "").substring(8,10)}/{item.data.replace('T00:00:00.000Z', "").substring(5,7)}/{item.data.replace('T00:00:00.000Z', "").substring(0,4)}</td>
                                                                <td>{String(item.situacao).replace('false', "Não").replace('true', "Sim")}</td>
                                                                <td>
                                                                    <Link type="button" class="btn btn-success btn-xs" to={`/editar-receita/${item.id}`}> <i class="nav-icon far fa-edit"></i> Editar </Link> &nbsp;  
                                                                    <button type="button" class="btn btn-danger btn-xs" id={item.id} onClick={this.handleClick} > <i class="nav-icon far fa-trash-alt"></i> Excluir </button> &nbsp; 
                                                                    <Link type="button" class="btn btn-info btn-xs"  to={`/lancamento/${item.id}`}> <i class="nav-icon far fa-edit"></i> Acessar </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>

                                                <br /><br />

                                                {/* <table id="example1" class="table table-bordered table-striped">
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
                                                                <td>R$ {item.valor},00</td>
                                                                <td>{item.data.replace('T00:00:00.000Z', "").substring(8,10)}/{item.data.replace('T00:00:00.000Z', "").substring(5,7)}/{item.data.replace('T00:00:00.000Z', "").substring(0,4)}</td>
                                                                <td>{String(item.situacao).replace('false', "Não").replace('true', "Sim")}</td>
                                                                <td>
                                                                    <Link to={`/editar-receita/${item.id}`}> <i class="nav-icon far fa-edit"></i> Editar </Link>
                                                                    <Link to={`/lancamento/${item.id}`}> <i class="nav-icon far fa-edit"></i> Acessar </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>*/}
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
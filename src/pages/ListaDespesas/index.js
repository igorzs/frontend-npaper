import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import './styles.css';

export default class ListaDespesas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            despesa: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/despesa/`)
            .then(despesa =>
                despesa.json().then(despesa => this.setState({ despesa }))
            )
            .catch(erro => this.setState({ erro }));
    }
    
    renderizaSoma(status) { 
        if (status==="pendente"){ 
            const arrayDeValores = this.state.despesa?.filter((item) => {if(!item.situacao) return true }).map((item)=>item.valor)
            const somaDespesasPendentes=arrayDeValores.length>0 &&arrayDeValores.reduce((total, valor)=>total+=valor).toLocaleString('pt-br',{minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaDespesasPendentes
        }
        if (status==="recebido"){ 
            const arrayDeValores = this.state.despesa?.filter((item) => {if(item.situacao) return true }).map((item)=>item.valor)
            const somaDespesasRecebidas=arrayDeValores.length>0 &&arrayDeValores.reduce((total, valor)=>total+=valor).toLocaleString('pt-br',{minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaDespesasRecebidas
        }
        if (status==="total"){ 
            const arrayDeValores = this.state.despesa?.map((item)=>item.valor)
            const somaDespesasTotal=arrayDeValores.length>0 &&arrayDeValores.reduce((total, valor)=>total+=valor).toLocaleString('pt-br',{minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return somaDespesasTotal
        }
    }


    render() {
         
       const { despesa } = this.state;
        return (
            <div>
                <Header />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: '1302.4px' }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Despesas</h1>
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
                                            <div className="small-box bg-danger">
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>{this.renderizaSoma("pendente")}</h3>
                                                    <p>Despesas Pendentes</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="fas fa-arrow-circle-up" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-6">
                                            <div className="small-box bg-danger">
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: 20 }}>R$</sup>{this.renderizaSoma("recebido")}</h3>
                                                    <p>Despesas Pagas</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="fas fa-arrow-circle-down" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-6">
                                            <div className="small-box bg-danger">
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
                                                <Link to="/incluir-despesa" type="button" class="btn btn-danger btn-sm"><i class="nav-icon far fa-plus-square"></i> Adicionar Despesa </Link> <br /> <br />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Listagem de Despesas</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 select2-success" data-dropdown-css-class="select2-success" style={{width: '100%'}}>
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
                                                        {this.state.despesa.map((item, index) => (
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
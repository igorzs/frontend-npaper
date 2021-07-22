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
        fetch(`http://localhost:3001/home/receita`)
            .then(receita =>
                receita.json().then(receita => this.setState({ receita }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { receita } = this.state;

        /* return (<div>
            {this.state.receita.map((item, index) => (
                <p>Hello, {item.descricao} from {item.valor}!</p>
            ))}
            </div>) */



return (
<div className="content-wrapper" style={{minHeight: '1302.4px'}}>
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
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Listagem de Receitas</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{width: 10}}>ID</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                    <th>Data</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>

                {this.state.receita.map((item, index) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.descricao}</td>
                    <td>R$ {item.valor}</td>
                    <td>{item.data}</td>
                    <td><span className="badge bg-danger">55%</span></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )



/*
        return receita.map((receita, index) => (
            <div className="receita-list"><p>teste 1</p>
                <div key={index}>
                    <h5>{receita.descricao}</h5>
                    <article>
                        <strong> {receita.valor} </strong>
                        <p> <Link to={`/receita/${receita.id}`}> Acessar </Link> </p>
                        <p>teste 2</p>
                        <br />
                    </article>
                </div>
            </div>
        ))*/
    }

    
}
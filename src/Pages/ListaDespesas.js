import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ListaDespesas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      despesa: [],
      erro: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/home/despesa`)
      .then(despesa =>
        despesa.json().then(despesa => this.setState({ despesa }))
      )
      .catch(erro => this.setState({ erro }));
  }

  render() {
    const { despesa } = this.state;
    return (
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
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Listagem de Despesas</h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>ID</th>
                          <th>Descrição</th>
                          <th>Valor (R$)</th>
                          <th>Data</th>
                          <th>Recebido</th>
                          <th>Ação</th>
                        </tr>
                      </thead>
                      <tbody>

                        {this.state.despesa.map((item, index) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>R$ {item.valor}</td>
                            <td>{item.data}</td>
                            <td>{ String(item.recebido) }</td>
                            <td><Link to={`/despesa/${item.id}`}> Acessar </Link></td>
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
  }
}
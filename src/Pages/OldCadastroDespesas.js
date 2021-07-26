import React, { Component } from 'react';

export default class CadastroDespesas extends Component {
    render() {
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
                                        <form method="post" action="http://localhost:3003/home/despesa/" name="nome-form" id="id-form">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div class="col-3">
                                                        <label htmlFor="exampleInputEmail1">Valor</label>
                                                        <input type="text" name="valor" className="form-control" id="valor" placeholder="Digite o Valor" />
                                                    </div>
                                                    <div class="col-4">
                                                        <label htmlFor="exampleInputEmail1">Descrição</label>
                                                        <input type="text" name="descricao" className="form-control" id="descricao" placeholder="Digite a Descrição" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <label htmlFor="exampleInputEmail1">Data</label>
                                                        <input type="date" name="data" className="form-control" id="data" placeholder="Digite a Data" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label>Categoria</label>
                                                        <select className="form-control" name="categoria" id="categoria">
                                                            <option value="Remuneração">Remuneração</option>
                                                            <option value="Bônus">Bônus</option>
                                                            <option value="Rendimento">Rendimento</option>
                                                            <option value="Empréstimo">Empréstimo</option>
                                                            <option value="Outras Rendas">Outras Rendas</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input name="recebido" id="recebido" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label">Recebido</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Salvar</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        )
    }
}
import React, { Component } from 'react';

export default class CadastroReceitas extends Component {
    render() {
        return (
            <div>

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
                                            <h3 className="card-title">Incluir</h3>
                                        </div>
                                        <form action="URL_BACK_END" name="nome-form" id="id-form">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div class="col-3">
                                                        <label htmlFor="exampleInputEmail1">Valor</label>
                                                        <input type="text" name="nome_coluna_banco1" className="form-control" id="nome_coluna_banco" placeholder="Digite o Valor" />
                                                    </div>
                                                    <div class="col-4">
                                                        <label htmlFor="exampleInputEmail1">Descrição</label>
                                                        <input type="text" name="nome_coluna_banco2" className="form-control" id="nome_coluna_banco" placeholder="Digite a Descrição" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <label htmlFor="exampleInputEmail1">Data</label>
                                                        <input type="text" name="nome_coluna_banco2" className="form-control" id="nome_coluna_banco" placeholder="Digite a Data" />
                                                    </div>
                                                    <div className="col-4">
                                                        <label>Categoria</label>
                                                        <select className="form-control">
                                                            <option>Remuneração</option>
                                                            <option>Bônus</option>
                                                            <option>Rendimento</option>
                                                            <option>Empréstimo</option>
                                                            <option>Outras Rendas</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" />
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
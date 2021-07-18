import React, { Component } from 'react'

export default class CadastroReceitas extends Component {
    render() {
        return (
            <div>

                <div className="content-wrapper" style={{ minHeight: '1345.6px' }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>General Form</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Dashbord</a></li>
                                        <li className="breadcrumb-item active">Título da Página</li>
                                    </ol>
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
                                            <h3 className="card-title">Título da Página</h3>
                                        </div>
                                        <form action="URL_BACK_END" name="nome-form" id="id-form">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nome Label 1</label>
                                                    <input type="text" name="nome_coluna_banco1" className="form-control" id="nome_coluna_banco" placeholder="Digite o Valor" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Nome Label 2</label>
                                                    <input type="text" name="nome_coluna_banco2" className="form-control" id="nome_coluna_banco" placeholder="Digite o Valor" />
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

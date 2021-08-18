import React, { useEffect, Component, useState } from 'react';
import Header from "../../components/header";
import api from '../../services/api';
import { Link } from "react-router-dom";
import Menu from "../../components/menu";
import { Chart } from "react-google-charts";
import Footer from "../../components/footer";
import './styles.css';

export default function DashboardInicial(props) {

    const [allDespesas, setAllDespesas] = useState([]);
    const [allReceitas, setAllReceitas] = useState([]);

    /* BUSCA TODAS AS DESEPESAS DO USUÁRIO */
    useEffect(() => {
        api
            .get("/despesas-usuario/19")
            .then((response) => setAllDespesas(response.data))
            .catch((err) => {
                console.error('Erro' + err);
            });
    }, []);

    /* BUSCA TODAS AS RECEITAS DO USUÁRIO */
    useEffect(() => {
        api
            .get("/receitas-usuario/19")
            .then((response) => setAllReceitas(response.data))
            .catch((err) => {
                console.error('Erro' + err);
            });
    }, []);

    function mostraGrafDespesas() {
        let data = [['Descrição', 'Valor R$']];

        allDespesas.map((item, index) => (
            data.push([item.descricao, item.valor])
        ));


        return (
            <div className="card">
                <Chart
                    width={'450px'}
                    height={'250px'}
                    chartType="PieChart"
                    data={data}
                    options={{
                        title: 'Minhas despesas',
                        is3D: true,
                    }}
                />
                <Link className="link-chart" to="./lista-despesas">VER MAIS</Link>
            </div>
        );
    }

    function mostraGrafReceitas() {
        let data = [['Descrição', 'Valor R$']];

        allReceitas.map((item, index) => (
            data.push([item.descricao, item.valor])
        ));


        return (
            <div className="card">
                <Chart
                    width={'450px'}
                    height={'250px'}
                    chartType="PieChart"
                    data={data}
                    options={{
                        title: 'Minhas receitas',
                        is3D: true,
                    }}
                />
                <Link className="link-chart" to="./lista-receitas">VER MAIS</Link>
            </div>
        );
    }

    function mostraDespesasTotal() {

        let amount = 0;

        allDespesas.map((item, index) => {

            if (item.situacao === false) {
                amount += item.valor
            }
        });

        amount = amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");

        return (
            <div className="small-box expensive-result">
                <div className="inner">
                    <h3>{amount}</h3>
                    <p>Despesas Total</p>
                </div>
                <div className="icon">
                    <i className="ion ion-arrow-down-a" />
                </div>
            </div>
        );
    }

    function mostraSaldo() {

        let despesas = 0;
        let receitas = 0;

        allDespesas.map((item, index) => {

            if (item.situacao === false) {
                despesas += item.valor
            }
        });

        allReceitas.map((item, index) => {
            if (item.situacao === true) {
                receitas += item.valor
            }
        });

        let saldo = receitas-despesas;
        saldo = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");

        return (
            <div className="small-box balance-result">
                <div className="inner">
                    <h3>{saldo}</h3>
                    <p>Saldo atual</p>
                </div>
                <div className="icon">
                    <i className="ion ion-cash" />
                </div>
            </div>
        );
    }

    function mostraReceitasTotal() {

        let amount = 0;

        //PEGA SOMENTE RECEITAS RECEBIDAS
        allReceitas.map((item, index) => {
            if (item.situacao === true) {
                amount += item.valor
            }
        });

        amount = amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");

        return (
            <div className="small-box revenue-result">
                <div className="inner">
                    <h3>{amount}</h3>
                    <p>Receitas Total</p>
                </div>
                <div className="icon">
                    <i className="ion ion-arrow-up-a" />
                </div>
            </div>
        );
    }

    function mostraSaldoConsolidado(){
        let despesas = 0;
        let receitas = 0;

        allDespesas.map((item, index) => {

            if (item.situacao === false) {
                despesas += item.valor
            }
        });

        allReceitas.map((item, index) => {
            if (item.situacao === true) {
                receitas += item.valor
            }
        });

        let saldo = receitas-despesas;
        saldo = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");
        despesas = despesas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");
        receitas = receitas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");

        return (
            <div className="card">
                <p className="tit-balance" >Resumo Consolidado</p>
                <div className="row">
                    <div className="col-3">
                        <p>Receitas</p>
                    </div>
                    <div className="col-1">
                        <p>R$</p>
                    </div>
                    <div className="col-3 revenues-value">
                        <p>{receitas}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <p>Depesas</p>
                    </div>
                    <div className="col-1">
                        <p>R$</p>
                    </div>
                    <div className="col-3 expense-value">
                        <p>{despesas}</p>
                    </div>
                </div>
                <div className="row balance-row">
                    <div className="col-3">
                        <p>Saldo</p>
                    </div>
                    <div className="col-1">
                        <p>R$</p>
                    </div>
                    <div className="col-3 balance-value">
                        <p>{saldo}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (

        <div>

            <Header />
            <Menu />

            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>

                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-3 result-balance">
                            {mostraSaldo()}
                            {mostraReceitasTotal()}
                            {mostraDespesasTotal()}
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6">
                                    {mostraGrafDespesas()}
                                    
                                </div>
                                <div className="col-6">
                                    {mostraGrafReceitas()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    {mostraSaldoConsolidado()}
                                </div>
                                <div className="col-6">
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* /.content */}
            </div>
            <Footer />
        </div>

    )
}
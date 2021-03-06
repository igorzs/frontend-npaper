import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="img/npaper-logo.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">nPaper</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                                <li className="nav-item has-treeview menu-open">
                                    <a href="./dashboard" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    
                                </li>
                                <li className="nav-header">CADASTROS</li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-plus-square" />
                                        <p>
                                            Receitas
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/lista-receitas" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Listar</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/incluir-receita" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Incluir</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="/incluir-despesa" className="nav-link">
                                        <i className="nav-icon far fa-minus-square" />
                                        <p>
                                            Despesas
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/lista-despesas" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Listar</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/incluir-despesa" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Incluir</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>

        )
    }
}

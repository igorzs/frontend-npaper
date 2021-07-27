import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import imgHome from '../../assets/home-npaper.png';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function RegisterLogin(props) {
    const { history } = props;
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');

    const [alert, showAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [typeAlert, setTypeAlert] = useState('');

    const [formToShow, setForm] = useState('login');

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            email,
            senha,
        };

        try {
            const response = await api.post('authenticate', data)
            const token = response.data;

            if (response.status === 200) {
                localStorage.setItem('@npaper/token', response.data);
                setAlertContent('Login feito com sucesso!');
                setTypeAlert('success');
                showAlert(true);
                history.push('/');
            } else {
                setAlertContent('Ocorreu um erro!');
                setTypeAlert('error');
                showAlert(true);
            }

        } catch (err) {
            setAlertContent('Erro ao efetuar o login, revise os campos e tente novamente!');
            setTypeAlert('error');
            showAlert(true);
        }

    }

    async function handleNewRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            senha,
        };

        try {
            await api.post('cadastro', data)
                .then(response => {

                    if (response.status === 200) {
                        setAlertContent('Cadastro feito com sucesso!');
                        setTypeAlert('success');
                        showAlert(true);
                    } else {
                        setAlertContent('Ocorreu um erro!');
                        setTypeAlert('error');
                        showAlert(true);
                    }
                })

        } catch (err) {
            setAlertContent('Erro ao efetuar o cadastro, revise os campos e tente novamente!');
            setTypeAlert('error');
            showAlert(true);
        }

    }

    function getFormRegister() {
        return (
            <div className="register-content">
                <form className="form-register" onSubmit={handleNewRegister}>
                    <TextField id="standard-basic" label="Seu nome"
                        value={nome}
                        onChange={e => setName(e.target.value)}
                    />
                    <br />

                    <TextField id="standard-basic" label="Seu e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <br />

                    <TextField id="standard-basic" label="Senha"
                        type={showPassword ? "text" : "password"}
                        value={senha}
                        onChange={e => setPass(e.target.value)}
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <br />
                    <Button variant="contained" className="btn-npaper" type="submit">
                        Cadastrar
                    </Button>
                </form>
            </div>
        );
    }

    function getFormLogin() {
        return (
            <div className="login-content">
                <form className="form-login" onSubmit={handleLogin}>
                    <TextField id="standard-basic" label="Seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField id="standard-basic" label="Senha"
                        type={showPassword ? "text" : "password"}
                        value={senha}
                        onChange={e => setPass(e.target.value)}
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <br />
                    <Button variant="contained" className="btn-npaper" type="submit">
                        Entrar
                    </Button>
                </form>
                <a href="#" className="forgot-pass-link" >Esqueceu sua senha ?</a>
            </div>
        );
    }

    function showFormRegister() {
        setForm('register');
        setName('');
        setEmail('');
        setPass('');
        showAlert(false);
    }

    function showFormLogin() {
        setForm('login');
        setEmail('');
        setPass('');
        showAlert(false);
    }


    return (
        <div className="home-npaper-container flex">

            <div className="item flex-item-1">
                <div className="content">
                    <div className="title-home">
                        <h1>Cuidado é igual a dinheiro,<br />nunca é demais.</h1>
                    </div>
                    <div className="imgHome">
                        <img src={imgHome} className="App-logo" alt="logo" />
                    </div>
                    <div className="subtitle-home">
                        <p>Você está no caminho certo para controlar<br />suas finanças pessoais</p>
                    </div>
                </div>
            </div>

            <div className="item flex-item-1">
                <div className="content">

                    <div className="change-form" >
                        <div>
                            <button className={formToShow === "login" ? "bt-active" : "bt-disabled"} onClick={showFormLogin}>Entrar</button>
                        </div>
                        <div>
                            <button className={formToShow === "register" ? "bt-active" : "bt-disabled"} onClick={showFormRegister}>Cadastrar</button>
                        </div>
                    </div>

                    {formToShow === "login" ? getFormLogin() : getFormRegister()}

                    {alert ? <Alert variant="filled" severity={typeAlert}>{alertContent}</Alert> : <></>}

                    <div className="policy-terms-content">
                        <span>Ao utilizar o nPaper, você está de acordo com os <a href="#" >Termos de Uso</a> e <a href="#">Política de Privacidade</a></span>
                    </div>
                </div>
            </div>
        </div>
    );


}
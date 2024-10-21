import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', senha: '' });
    const navigate = useNavigate(); // Hook para navegação

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/admin/login', credentials);
            console.log('Login bem-sucedido:', response.data);
            // Redirecionar para a página inicial ou dashboard
            navigate('/home'); // Altere para a rota desejada após o login
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Credenciais inválidas'); // Mensagem de erro para o usuário
        }
    };

    return (
        <div className="wrapper">
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={credentials.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input 
                                    type="password" 
                                    name="senha" 
                                    value={credentials.senha} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label>
                                    <input type="checkbox"/> Remember me
                                </label>
                                <label>
                                    <a href="../Senha/index.html">Forgot password?</a>
                                </label>
                            </div>
                            <button type="submit" className='btn btn-sm btn-warning'>
                                Logue
                            </button>
                            <div className="register">
                                <p>Don't have an account? <Link to={'/cadastro'}>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login
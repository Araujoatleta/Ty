import { Link, useNavigate } from "react-router-dom";
import './Cadastro4.css';
import React, { useState } from 'react';
import axios from 'axios';

const Cadastro4 = () => {
    const [credentials, setCredentials] = useState({ email: '', senha: '' });
    const navigate = useNavigate();

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
                            <h2>Seu Acesso</h2>
                            <div className="inputbox">
                                <ion-icon name="email"></ion-icon>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={credentials.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Email:</label>
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
                                <label htmlFor="">Senha:</label>
                            </div>

                            <button type="submit" className='btn btn-sm btn-warning'>
                                Acessar
                            </button>

                            <div className="forget">
                                <label>
                                    <input type="checkbox"/> Aceito e concordo com as Políticas e termos de uso
                                </label>
                            </div>

                            <div className="register">
                                <p>Se você já tem uma conta? <Link to="/login">Logue</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="form-box1">
                    <div className="form-value1">
                        {/* Conteúdo adicional pode ser adicionado aqui */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cadastro4;
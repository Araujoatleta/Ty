import { Link, useNavigate } from "react-router-dom";
import './Cadastro.css';
import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    const [admin, setAdmin] = useState({ name: '', email: '', cnpj: '', senha: '' });
    const navigate = useNavigate(); // Hook para navegação

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/admin', admin);
            console.log('Admin cadastrado:', response.data);
            // Limpar o formulário após o envio
            setAdmin({ name: '', email: '', cnpj: '', senha: '' });
            // Redirecionar para a próxima página
            navigate('/cadastro4'); // Altere '/cadastro4' para a rota desejada
        } catch (error) {
            console.error('Erro ao cadastrar admin:', error);
        }
    };

    return (
        <div className="wrapper">
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Cadastre-se</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={admin.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="name"></ion-icon>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={admin.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Nome e Sobrenome</label>
                            </div>
                            <div className="inputbox">
                                <input 
                                    type="text" 
                                    name="cnpj" 
                                    value={admin.cnpj} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">CNPJ</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input 
                                    type="password" 
                                    name="senha" 
                                    value={admin.senha} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className='btn btn-sm btn-warning'>
                                Proximo
                            </button>
                            <div className="register">
                                Se você já tem uma conta? <Link to="/Login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cadastro;
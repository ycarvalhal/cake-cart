import React, { Component } from 'react';
import axios from 'axios';

import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                ...prevState, [name]: value
            }
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents', this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <footer className="footer" onSubmit={this.handleFormSubmit}>
                <p className="footer-newsletter">
                    <span className="footer-newletter-title">Newsletter</span>
                    <span className="footer-newletter-subtitle">Receba nossas promoções e novidades. Inscreva-se</span>
                </p>

                <form className="footer-form">
                    <input type="text" 
                        title="Nome completo" 
                        name="name" 
                        value={this.state.name} 
                        onChange = {this.handleInput}
                        placeholder="Seu nome" required
                        />

                    <input type="email" 
                        title="E-mail" 
                        name="email" 
                        value={this.state.email} 
                        onChange = {this.handleInput}
                        placeholder="Seu email" required
                        />

                    <input type="submit" value="Enviar"/>
                </form>
            </footer>
        );
    }
}

export default Footer;
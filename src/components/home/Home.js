import React, { Component } from 'react';
import cart from '../../images/cart.png';
import axios from 'axios';

import './Home.css';

class Home extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
            .then(response => { 
                this.setState({ items: response.data.slice(0, 4)});
            });
    }

    render() {
        let itemsList = this.state.items.map(item => {
            return (
                <div className="card" key={item.productId}>
                    <img className="card-img" src={item.imageUrl} alt={item.productName} />
                    <span className="card-title">{item.productName}</span>
                    <span className="card-price">R$ <span>{item.price}</span></span>
                    <span to="/" className="card-btn">
                        COMPRAR <img className="card-btn-cart" src={cart} alt="cart"/>
                    </span>
                </div>
            );
        })

        return(
            <div className="products">
                <h3 className="products-title">Produtos em destaque</h3>
                <div className="products-box">
                    {itemsList}
                </div>
            </div>
        );
    }
}

export default Home;
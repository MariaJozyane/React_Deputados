import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class Search extends Component
{
    state = {
        dep: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados/')
        .then(res => {
            this.setState({ dep: res.data.dados })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render()
    {   
        const {dep} = this.state;
        
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12"></div>
            </div>
            {
                dep.map((d, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={ d.urlFoto } id="img" />
                        </div>
                        <div className="col-md-7">
                            <h3>{ d.nome }</h3>
                            <h3>{ d.siglaUf } - { d.siglaPartido }</h3>
                            <h3>{ d.email }</h3>
                            <a href={ d.uri } className="btn btn-info">Ver no site</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;

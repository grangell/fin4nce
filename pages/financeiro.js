import React, { Component } from 'react'
import Main from '../components/Template/Main'
import Nav from '../components/Template/Nav'
import Logo from '../components/Template/Logo'
import Footer from '../components/Template/Footer'

const headerProps = {
    icon: 'file',
    title: 'Financeiro',
    subtitle: 'Descrição do sistema e suas funcionalidades.'
}


export default class Financeiro extends Component {
    
    renderMain() {
        return (    
            <h1>Parte adicional do sistema.</h1>
        )   
    }

    render() {
        return (
            <div className="app">
                <Logo/> 
                <Nav/>
                <Main {...headerProps}>
                    {this.renderMain()}
                </Main>
                <Footer/>
            </div>
        )
    }
}

Financeiro.title = 'Financeiro'

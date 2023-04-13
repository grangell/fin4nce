import React, { Component } from 'react'
import axios from 'axios'
import Main from '../components/Template/Main'
import Nav from '../components/Template/Nav'
import Logo from '../components/Template/Logo'
import Footer from '../components/Template/Footer'

const headerProps = {
    icon: 'users',
    title: 'Funcionários',
    subtitle: 'Gerenciamento de funcionários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:8080/funcionarios'
const initialState = {
    user: { name: '', salario: '' },
    list: []
}

export default class Funcionarios extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }
    
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }
    
    
    load(user) {
        this.setState({ user })
    }
    
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }
    
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
        console.log(typeof(event))
    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Funcionário</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Salário</label>
                            <input type="number" step="0.01" min="0.01" className="form-control"
                                name="salario"
                                value={this.state.user.salario}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o salário..." />
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-primary p-2"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    renderTable() {
        return (
            <div className="tabela">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Funcionário</th>
                            <th>Salário</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-hidden">
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.salario}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="app">
                <Logo/>
                <Nav/>
                <Main {...headerProps}>
                    {this.renderForm()}
                    {this.renderTable()}
                </Main>
                <Footer/>
            </div>
        )
    }
} 

Funcionarios.title = 'Funcionários'


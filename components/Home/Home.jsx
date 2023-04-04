import React from 'react'
import Main from '../Template/Main'

export default function Home() {
    return (
        <Main icon="home" title="Início"
            subtitle="Projeto de gerenciamento de funcionários.">
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mt-2">Sistema para exemplificar o gerenciamento
                de funcionários desenvolvido em React e outras tecnologias!</p>
        </Main>
    )
}
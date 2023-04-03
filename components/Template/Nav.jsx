import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../Auth'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
    
    const [auth, { logout }] = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        !auth.user && router.push('/')
      }, [auth.user])

    return (
        <aside className="menu-area">
            <nav className='menu'>
                <Link href="/system">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link href="/funcionarios">
                    <i className="fa fa-users"></i> Funcionários
                </Link>
                <Link href="/financeiro">
                    <i className="fa fa-file"></i> Financeiro
                </Link>
                <Link href="/">
                    <i className="fa fa-gear"></i> Em desenvolvimento
                </Link>
                <Link onClick={logout} href="/login" className="sair">
                    <i className="fa fa-sign-out"></i> Logout
                </Link>
            </nav>
        </aside>
    )
}

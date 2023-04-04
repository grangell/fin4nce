import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <aside className="logo">
            <Link href="/" className="logo">
                <Image className="syst3m" src="https://i.imgur.com/FVTpp7q.png" alt="Logo Fin4nce" width={500} height={500}/>
            </Link>
        </aside>
    )
}

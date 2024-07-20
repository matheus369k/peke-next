'use client'

import Link from 'next/link'
import Image from 'next/image'

import { StyledNav } from './styles'

export function NavBar() {
    return (
        <StyledNav>
            <div>
                <Image src='/pokeball.png' alt='' loading='lazy' width={30} height={30} />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>Sobre</Link></li>
            </ul>
        </StyledNav>
    )
}
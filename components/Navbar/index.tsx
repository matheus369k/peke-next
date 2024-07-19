import Link from 'next/link'
import { StyledNav } from './styles'

export function NavBar() {
    return (
        <StyledNav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>Sobre</Link></li>
            </ul>
        </StyledNav>
    )
}
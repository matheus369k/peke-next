import { styled } from 'styled-components'

export const StyledNav = styled.nav`
    background: ${props => props.theme.black};

    padding: 1.5rem .875rem;

    ul {
        display: flex;
        align-items: center;

        gap: 1rem;

        a {
            color: ${props => props.theme.white};

            text-transform: capitalize;
            font-weight: bold;

            transition: .4s;

            &:hover {
                color: ${props => props.theme['gray-500']};
            }
        }
    }

`
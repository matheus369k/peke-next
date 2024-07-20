import { styled } from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background: ${props => props.theme.black};

    padding: 1.5rem .875rem;
    margin-bottom: 2rem;

    div {
        display: flex;
        
        gap: .5rem;
    }

    ul {
        display: flex;
        align-items: center;

        gap: 1rem;

        a {
            position: relative;

            color: ${props => props.theme.white};

            text-transform: capitalize;
            font-weight: bold;

            padding: .3125rem;

            transition: .4s;
            
            &:hover {
                color: ${props => props.theme['gray-500']};
            }

            &::before {
                content: '';

                width: 0%;
                height: 2px;

                position: absolute;
                left: 50%;
                bottom: 0;

                transform: translateX(-50%);

                background: ${props => props.theme['gray-500']};

                transition: width .2s;
            }

            &:hover::before {
                width: 100%
            }
        }
    }

`
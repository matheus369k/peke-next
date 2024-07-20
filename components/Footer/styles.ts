import { styled } from 'styled-components'

export const StyledFooter = styled.footer`
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};

    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 1rem;
    }
`
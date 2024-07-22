import { styled } from 'styled-components'

export const StyledMain = styled.main`
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};

    min-height: 80vh;
    max-width: 70rem;
    
    margin: auto;
` 
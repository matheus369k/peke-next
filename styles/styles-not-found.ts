'use client'

import styled from "styled-components";

export const StyledNotFoundPage = styled.main`
    color: ${props => props.theme['gray-100']};

    min-height: 80vh;
    max-width: 70rem;
    
    margin: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 2rem;

    opacity: .75;

    a {
        text-decoration: none;

        background: ${props => props.theme.white};
        color: ${props => props.theme.black};

        padding: .7rem 1.2rem;

        border-radius: 6px;

        font-weight: bold;

        transition: background color .4s;

        &:hover {
            background: ${props => props.theme.red};
            color: ${props => props.theme.white};
        }
    } 
`
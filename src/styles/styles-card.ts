'use client'

import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 1rem;
    margin-bottom: 2rem;

    flex: 1;
    width: 23%;
    min-width: 12.5rem;

    border-radius: 1rem;
    border: 1px solid ${props => props.theme.red};

    box-shadow: .3125rem .3125rem .75rem ${props=>props.theme["black/50"]};

    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme.white};

    h3 {
        text-transform: capitalize;
        
        margin-bottom: 1rem;

        font-size: 1rem;
    }

    span {
        margin: 1rem 0;

        background: ${props=> props.theme.red};
        color: ${props=> props.theme.white};

        border-radius: 6px;

        padding: .3125rem;

    }

    a {
        text-decoration: none;

        background: ${props=> props.theme.white};
        color: ${props=> props.theme.black};

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
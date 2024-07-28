'use client'

import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0% {
        content: '';
    }
    25% {
        content: '.';
    }
    50% {
        content: '..';
    }
    75% {
        content: '...';
    }
`;

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    position: relative;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .4rem;

        h1 {
            color: ${props => props.theme.red};

            text-align: center;

            font-size: 3rem;

            span {
                color: ${props => props.theme["gray-100"]};
            }
        }
    }

    &>button {
        position: fixed;
        top: 2rem;
        right: 2rem;

        background: transparent;
        box-shadow: 0;
        outline: 0;
        border: 0;

        color: white;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-wrap: wrap;
    }

    &>p {
        width: 200px;

        margin: auto;

        font-size: 2rem;

        &::after {
            content: '';
        
            animation-name: ${loading};
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
    }
`

export const StyledNotFoundPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 2rem;

    min-height: 60vh;

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
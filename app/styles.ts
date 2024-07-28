'use client'

import styled from "styled-components";

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
            color: ${props=> props.theme.red};

            text-align: center;

            font-size: 3rem;

            span {
                color: ${props=> props.theme["gray-100"]};
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
`
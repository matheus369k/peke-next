'use client'

import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

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


    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-wrap: wrap;
    }
`
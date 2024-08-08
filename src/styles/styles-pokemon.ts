'use client'

import styled from "styled-components"

export const StyledPokemon = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4rem repeat(2, max-content);

    gap: 2rem;
    padding-top: 2rem;
    padding-left: .5rem;
    padding-right: .5rem;

    position: relative;

    h3 {
        text-transform: capitalize;
    }

    img {
        grid-column: 1;
        grid-row: 2/4;

        align-self: end;
    }

    &>div:not(:first-of-type) {        
        padding: 1.5rem 1rem;

        background: ${props => props.theme["gray-900"]};

        border-radius: 6px
    } 

    &>a {
        position: absolute;
        left: 0;
    }

    @media (max-width: 849px) {
        display: flex;
        flex-direction: column;

        max-width: 40rem;

        margin: auto;

    img {
        align-self: center;
    }
    }
`

export const StyledPokeTitle = styled.div`
    padding: .5rem 0;
    padding-right: 1.5rem;

    background: ${props => props.theme["gray-900"]};

    width: max-content;
    height: max-content;

    border-radius: 6.25rem;

    position: relative;

    img {
        position: absolute;
        inset: 0;
    }

    h2 {
        font-size: 1.8rem;

        padding-left: 4rem;

        text-transform: capitalize;

        color: ${props => props.theme.white};

        span {
            color: ${props => props.theme.red};
        }
    }
`

export const StyledPokeMeasures = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 2rem;

    div {
        display: flex;

        gap: 1rem;
    }

    p {
        width: 1px;
        height: 100%;

        background: ${props => props.theme["gray-500"]};
    }
`

export const StyledPokeStatus = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding-bottom: .375rem;
            padding-right: .375rem;

            border-bottom: 2px solid ${props=>props.theme["gray-500"]};

            border-bottom-right-radius: 6px;

            h3 {
                text-transform: uppercase;
            }
        }
    }
`

export const StyledPokeTypes = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    ul {
        display: flex;
        justify-content: center;

        gap: 2rem;

        li {
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: bold;

            padding: .5rem 1.8rem;

            border-radius: 6px;
            

            &#type_normal {
                background-color: ${props => props.theme.type_normal};
            }

            &#type_fire {
                background-color: ${props => props.theme.type_fire};
            }

            &#type_water {
                background-color: ${props => props.theme.type_water};
            }

            &#type_eletric {
                background-color: ${props => props.theme.type_eletric};
            }

            &#type_grass {
                background-color: ${props => props.theme.type_grass};
            }

            &#type_ice {
                background-color: ${props => props.theme.type_ice};
            }

            &#type_fighting {
                background-color: ${props => props.theme.type_fighting};
            }

            &#type_poison {
                background-color: ${props => props.theme.type_poison};
            }

            &#type_ground {
                background-color: ${props => props.theme.type_ground};
            }

            &#type_flying {
                background-color: ${props => props.theme.type_flying};
            }

            &#type_psychic {
                background-color: ${props => props.theme.type_psychic};
            }

            &#type_bug {
                background-color: ${props => props.theme.type_bug};
            }

            &#type_rock {
                background-color: ${props => props.theme.type_rock};
            }

            &#type_ghost {
                background-color: ${props => props.theme.type_ghost};
            }

            &#type_dragon {
                background-color: ${props => props.theme.type_dragon};
            }

            &#type_dark {
                background-color: ${props => props.theme.type_dark};
            }

            &#type_steel {
                background-color: ${props => props.theme.type_steel};
            }

            &#type_fairy {
                background-color: ${props => props.theme.type_fairy};
            }
        }
    }
`
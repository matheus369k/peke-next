/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { api } from "@/lib/api"
import Card from "../Card"
import { useEffect, useState } from "react"
import { CaretDoubleUp } from "@phosphor-icons/react"

interface ListPokeType {
    count: number
    next: null | string
    previous: null | string
    results: [{
        name: string
        url: string
    }]
}

export default function CardsList() {
    const [pokemons, setPokemons] = useState<ListPokeType>()
    const [backTopScroll, setBackTopScroll] = useState<boolean>(false)
    const [renderLimited, setRenderLimited] = useState({
        start: 0,
        end: 40
    })

    useEffect(() => {
        api.get(`?offset=${renderLimited.start}&limit=${renderLimited.end}`).then(resp => {
            setPokemons(resp.data)
        })

        document.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 300 && !backTopScroll) {
                setBackTopScroll(true)
                return
            }

            setBackTopScroll(false)
        })
    }, [renderLimited])

    function amountPokeCards() {
        setRenderLimited((state) => {
            return {
                ...state,
                end: state.end + 40
            }
        })
    }

    function handleBackTopScroll() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backTopScroll && 
                <button onClick={handleBackTopScroll} type='button' title='Back Top'>
                    <CaretDoubleUp size={32} />
                </button>
            }

            {pokemons ? (
                <ul>
                    {
                        pokemons.results.map((pokemon, index) => {
                            return (
                                <Card
                                    key={pokemon.name}
                                    endCard={index === renderLimited.end - 1}
                                    url={pokemon.url}
                                    amountPokeCards={amountPokeCards}
                                />
                            )
                        })
                    }
                </ul>
            ) : (<p>Carregando</p>)
            }
        </>
    )
}
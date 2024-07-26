"use client"

import Image from 'next/image'
import { StyledHome } from './styles'
import { Card } from '@/components/Card'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

interface ListPokeType {
  count: number
  next: string
  previous: null | [
    {
      name: string
      url: string
    }],
  results: [{
    name: string
    url: string
  }]
}

export default function Home() {
  const [pokemons, setPokemons] = useState<ListPokeType>()
  const [renderLimited, setRenderLimited] = useState({
    start: 0,
    end: 32
  })

  useEffect(() => {
    api.get(`pokemon/?offset=${renderLimited.start}&limit=${renderLimited.end}`).then(resp => {
      setPokemons(resp.data)
    })
  }, [renderLimited])

  function amountPokeCards() {
    setRenderLimited((state)=>{
      return {
        ...state,
        end: state.end + 32
      }})
  }

  return (
    <StyledHome>
      <div>
        <h1>Poke<span>Next</span></h1>

        <Image src='/pokeball.png' alt='' width={50} height={50} />
      </div>

      <ul>
        {pokemons?.results.map((pokemon, index) => {
          return (
            <Card 
              key={pokemon.name} 
              endCard={index === renderLimited.end - 1} 
              url={pokemon.url}
              amountPokeCards={amountPokeCards}
            />
          )
        })}
      </ul>
    </StyledHome>
  )
}
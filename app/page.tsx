import Image from 'next/image'
import { StyledHome } from './styles'
import { Card } from '@/components/Card'

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

async function getPokemons(start: number, end: number) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${end}`)
  const data: ListPokeType = await resp.json()

  return data
}

export default async function Home() {
  const pokemons = await getPokemons(1, 32)

  return (
    <StyledHome>
      <div>
        <h1>Poke<span>Next</span></h1>

        <Image src='/pokeball.png' alt='' width={50} height={50} loading='lazy' />
      </div>

      <ul>
        {pokemons.results.map(pokemon => {
          return <Card key={pokemon.name} url={pokemon.url} />
        })}
      </ul>
    </StyledHome>
  )
}
interface SinglePokeType {
  id: number
  name: string
  order: number
  abilities: [
    ability: {
      name: string
      url: string
    },
    is_hidden: boolean,
    slot: number
  ]
  base_experience: number
  cries: {
    latest: string
    legacy: string
  }
  forms: [
    {
      name: string
      url: string
    }
  ]
  game_indices: [{
    game_index: number
    version: {
      name: string
      url: string
    }
  }]
  height: number
  held_items: [{
    item: {
      name: string
      url: string
    }
    version_details: [
      {
        rarity: number
        version: {
          name: string
          url: string
        }

      }
    ]
  }]
  is_default: boolean
  location_area_encounters: string
  moves: [{
    move: {
      name: string
      url: string
    }
    version_group_details: [
      {
        level_learned_at: number
        move_learn_method: {
          name: string
          url: string
        }
        version_group: {
          name: string
          url: string
        }
      }
    ]
  }]
  past_abilities: []
  past_types: []
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: {
      dream_world: {
        front_default: string | null
        front_female: string | null
      }
      home: {
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
      }
      'official-artwork': {
        front_default: string | null
        front_shiny: string | null
      }
      showdown: {
        back_default: string | null
        back_female: string | null
        back_shiny: string | null
        back_shiny_female: string | null
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
      }
    }
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string | null
          back_gray: string | null
          back_transparent: string | null
          front_default: string | null
          front_gray: string | null
          front_transparent: string | null
        }
        yellow: {
          back_default: string | null
          back_gray: string | null
          back_transparent: string | null
          front_default: string | null
          front_gray: string | null
          front_transparent: string | null
        }
      }
      'generation-ii': {
        crystal: {
          back_default: string | null
          back_shiny: string | null
          back_shiny_transparent: string | null
          back_transparent: string | null
          front_default: string | null
          front_shiny: string | null
          front_shiny_transparent: string | null
          front_transparent: string | null
        }
        gold: {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
          front_transparent: string | null
        }
        silver: {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
          front_transparent: string | null
        }
      }
      'generation-iii': {
        emerald: {
          front_default: string | null
          front_shiny: string | null
        }
        'firered-leafgreen': {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
        }
        'ruby-sapphire': {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
        }
      }
      'generation-iv': {
        'diamond-pearl': {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        'heartgold-soulsilver': {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        platinum: {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string | null
            back_female: string | null
            back_shiny: string | null
            back_shiny_female: string | null
            front_default: string | null
            front_female: string | null
            front_shiny: string | null
            front_shiny_female: string | null
          }
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        'x-y': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-vii': {
        icons: {
          front_default: string | null
          front_female: string | null
        },
        'ultra-sun-ultra-moon': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-viii': {
        icons: {
          front_default: string | null
          front_female: string | null
        }
      }
    }
  }
  stats: [{
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }]
  types: [
    {
      slot: number
      type: {
        name: string
        url: string
      }
    }
  ]
  weight: number
}

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

export const dynamicParams = true;

async function getPokemons() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  const data: ListPokeType = await resp.json()

  return data
}

export default async function Home() {
  const pokemons = await getPokemons()

  console.log(pokemons)

  return (
    <>
      <h1>Poke Next</h1>

      <ul>
        {pokemons.results.map(pokemon => {
          return (
            <li key={pokemon.name}>
              {pokemon.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}
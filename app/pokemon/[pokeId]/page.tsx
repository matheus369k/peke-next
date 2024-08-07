'use server'

import Image from 'next/image'
import { StyledPokeMeasures, StyledPokemon, StyledPokeStatus, StyledPokeTitle, StyledPokeTypes } from '@/styles/styles-pokemon'

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

interface PokemonPropsType {
    params: {
        pokeId: string
    }
    searchParams: object
}

interface ListPokeType {
    count: number
    next: null | string
    previous: null | string
    results: [{
        name: string
        url: string
    }]
}

async function getPokemon(id: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data: SinglePokeType = await response.json()

    return data
}

export async function generateStaticParams() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1307')
    const data: ListPokeType = await response.json()

    const paths = data.results.map((pokemon_, index) => {
        return {
            pokeId: (index + 1).toString().padStart(4, '0'),
        }
    })

    return paths;
}

export default async function Pokemon({ params }: PokemonPropsType) {
    const pokemon = await getPokemon(Number(params.pokeId))

    return (
        <StyledPokemon>
            <StyledPokeTitle>
                <Image
                    src='/pokeball.png'
                    alt=''
                    width={50}
                    height={50}
                />

                <h2>{pokemon.name}
                    <span>#{params.pokeId}</span>
                </h2>
            </StyledPokeTitle>

            <Image
                src={
                    pokemon.sprites.other['official-artwork'].front_default
                    || 'https://placehold.co/400x400'
                }
                alt=''
                width={400}
                height={400}
                loading='lazy'
            />

            <StyledPokeMeasures>
                <div>
                    <h3>Altura: </h3>

                    <span>{(pokemon.height * 10 / 100).toFixed(2)}m</span>
                </div>

                <p />

                <div>
                    <h3>Peso: </h3>
                    <span>{(pokemon.weight / 10).toFixed(2)}kg</span>
                </div>
            </StyledPokeMeasures>

            <StyledPokeStatus>
                <h3>Estatísticas:</h3>

                <ul>
                    {pokemon.stats.map(stats => {
                        return (
                            <li key={stats.stat.name}>
                                <h3>{stats.stat.name}:</h3> <span>{stats.base_stat}</span>
                            </li>
                        )
                    })}
                </ul>
            </StyledPokeStatus>

            <StyledPokeTypes>
                <h3>Tipo(s): </h3>

                <ul>
                    {pokemon.types.map(types => {
                        return (
                            <li id={`type_${types.type.name}`} key={types.slot}>
                                <span>{types.type.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </StyledPokeTypes>
        </StyledPokemon>
    )
}
import Image from 'next/image'
import Link from 'next/link'
import { StyledCard } from './styles'

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

type UrlType = { url: string }

async function getPokemon(url: string) {
    const response = await fetch(url)
    const data: SinglePokeType = await response.json()

    return {
        id: data.id.toString().padStart(4, '0'),
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default || 'https://placehold.co/200x400',
    }
}

export async function Card({ url }: UrlType) {
    const dataPoke = await getPokemon(url);

    return (
        <StyledCard>
            <Image src={dataPoke.image} alt='' width={120} height={120} />

            <span>#{dataPoke.id}</span>

            <h3>{dataPoke.name}</h3>

            <Link href={`/pokemon/${dataPoke.id}`}>
                Detalhes
            </Link>
        </StyledCard>
    )
}
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StyledCard } from '@/styles/styles-card'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CardPokeType {
    id: string
    name: string
    image: string
}

interface CardPropsType {
    url: string
    endCard: boolean
    amountPokeCards: () => void
}

export default function Card({ url, endCard, amountPokeCards }: CardPropsType) {
    const [dataPoke, setDataPoke] = useState<CardPokeType>()

    const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            amountPokeCards()
        }
    })

    useEffect(() => {
        axios.get(url).then((resp => {
            setDataPoke({
                id: resp.data.id.toString().padStart(4, '0'),
                name: resp.data.name,
                image: resp.data.sprites.other['official-artwork'].front_default || 'https://placehold.co/200x400'
            })
        }))

        document.addEventListener('scrollend', () => {
            const cardList = document.getElementById('card-end');

            if (cardList) {
                intersectionObserver.observe(cardList)

                cardList.removeAttribute('id')
            }
        })
    }, [url])

    if (!dataPoke) {
        return
    }

    return (
        <StyledCard {...endCard && { id: 'card-end' }}>
            <Image src={dataPoke.image} alt='' width={120} height={120} loading='lazy' />

            <span>#{dataPoke.id}</span>

            <h3>{dataPoke.name}</h3>

            <Link href={`/pokemon/${dataPoke.id}`}>
                Detalhes
            </Link>
        </StyledCard>
    )
}
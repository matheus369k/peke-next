'use client'

import Image from "next/image";
import { StyledAbout } from "./styles";

export default function About() {
    return (
        <StyledAbout>
            <h1>Sobre o projeto</h1>

            <p>
                Nesta aula vamos criar uma página para o nosso sistema de #Next.js A ideia é relembrar este conceito de novas páginas utilizando este framework Para depois partirmos para próximas etapas 🔷 Telegram: https://t.me/horadecodar. Discord Hora de Codar:   / discord
            </p>

            <Image src='/charizard.png' alt='' width={300} height={300} />
        </StyledAbout>
    )
}
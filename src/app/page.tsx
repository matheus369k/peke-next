import Image from 'next/image'
import { StyledHome } from '@/styles/styles-home'
import CardsList from '@/components/CardsList'

export default function Home() {
  return (
    <StyledHome>
      <div>
        <h1>Poke<span>Next</span></h1>

        <Image src='/pokeball.png' alt='' width={50} height={50} />
      </div>

      <CardsList />
    </StyledHome>
  )
}
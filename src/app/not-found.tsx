import Image from "next/image";
import Link from "next/link";
import { StyledNotFoundPage } from "@/styles/styles-not-found";

export default function NotFound() {
    return (
        <StyledNotFoundPage>
            <Image src='/not-found-page.png' alt='' width={400} height={250} loading='lazy' />
            <Link href="/">Voltar</Link>
        </StyledNotFoundPage>
    )
}
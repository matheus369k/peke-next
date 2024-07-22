import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>Pagina não foi encontrada</h1>
            <Link href="/">Voltar</Link>
        </div>
    )
}
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex flex-row justify-between">
            <Link href="/"><a>Lost and Found</a></Link>
            <Link href="/kehilangan-barang"><a>Kehilangan Barang</a></Link>
            <Link href="/penemuan-barang"><a>Penemuan Barang</a></Link>
            <Link href="/login"><a>Login</a></Link>
        </nav>
    )
}
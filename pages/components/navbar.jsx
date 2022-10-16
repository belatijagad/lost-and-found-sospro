import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="bg-sky-200 py-1 mb-5">
            <dir className="container mx-auto flex flex-row justify-between ">
                <Link href="/"><a>Lost and Found</a></Link>
                <Link href="/kehilangan-barang"><a>Kehilangan Barang</a></Link>
                <Link href="/penemuan-barang"><a>Penemuan Barang</a></Link>
                <Link href="/login"><a>Login</a></Link>
            </dir>
        </nav>
    )
}
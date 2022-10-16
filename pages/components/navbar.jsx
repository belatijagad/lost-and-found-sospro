import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-sky-200 py-1 mb-5">
      <dir className="container mx-auto flex flex-row justify-between ">
        <Link href="/">
          <a>Lost and Found</a>
        </Link>
        <Link href="/kehilangan-barang">
          <a>Kehilangan Barang</a>
        </Link>
        <Link href="/penemuan-barang">
          <a>Penemuan Barang</a>
        </Link>
        {!session && (
          <button onClick={() => signIn()}>Login</button>
        )}
        {session && (
          <button onClick={() => signOut()}>Logout</button>
        )}
      </dir>
    </nav>
  );
}

import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Button from "./components/button";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import FormHilang from "./components/formHilang";

export default function Lost() {
  const {data: session} = useSession();
  const router = useRouter();

  // Redirect pengguna ke halaman utama jika belum login
  useEffect(() => {
    if (!session){
      setTimeout(() =>{
          router.push("/")
      }, 3000)
    }
  }, [])

  if (session){
    return (
      <>
        <Head>
          <title>Hilang</title>
        </Head>
        <Navbar />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <Button
              text="Kehilangan sesuatu?"
              className="col-span-2 border rounded-full border-black"
            />
            <input
              type="text"
              placeholder="Cari barang yang hilang"
              className="rounded-full col-span-10"
            />
          </div>
        </div>
        <Footer />
      </>
    ); 
  } else {
    return(
      <div>
        <p>You are not logged in</p>
      </div>
    )
  }
}

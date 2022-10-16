import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Head from "next/head";

export default function Found() {
    return(
        <>
        <Head>
            <title>Ketemu</title>
        </Head>
        <Navbar />
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-5">
                <Button 
                    text="Menemukan sesuatu?"
                    className="col-span-2 border rounded-full border-black" 
                />
                <input type="text" placeholder="Cari barang yang ditemukan" 
                    className="rounded-full col-span-10" 
                /  >
            </div>
        </div>
        <Footer />
        </>
    )
}
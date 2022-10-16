import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Button from "./components/button";

export default function Lost(){
    return(
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
                <input type="text" placeholder="Cari barang yang hilang" 
                    className="rounded-full col-span-10" 
                /  >
            </div>
        </div>
        <Footer />
        </>
    )
}
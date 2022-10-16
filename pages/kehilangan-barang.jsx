import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Lost(){
    return(
        <div>
            <Head>
                <title>Hilang</title>
            </Head>
            <Navbar />
            Page barang hilang
            <Footer />
        </div>
    )
}
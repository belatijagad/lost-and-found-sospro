import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Head from "next/head";

export default function Found() {
    return(
        <div>
            <Head>
                <title>Ketemu barang</title>
            </Head>
            <Navbar />
            Page penemuan barang
            <Footer />
        </div>
    )
}
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Head from "next/head";

export default function Authentication() {
    return(
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Navbar />
            Ini halaman login
            <Footer />
        </div>
    )
}
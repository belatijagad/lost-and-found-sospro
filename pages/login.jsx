import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Head from "next/head";

export default function Authentication() {
    return(
    <>
    <Head>
        <title>Login</title>
    </Head>
    <Navbar />
    <div className="container mx-auto">
        Ini halaman login
    </div>
    <Footer />
    </>
    )
}
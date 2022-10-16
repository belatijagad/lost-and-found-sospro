import Head from 'next/head'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Lost and Found Fasilkom UI</title>
        <meta name="description" content="Website social project House of Country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <Footer />
    </div>
  )
}

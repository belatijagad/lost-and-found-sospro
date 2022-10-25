import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Head from "next/head";

import { useState } from "react";
import FormKetemu from "./components/formKetemu";

export default function Found() {
  let [formOpen, setFormOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Ketemu</title>
      </Head>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <FormKetemu className="col-span-2 border rounded-full border-black" />
          <input
            type="text"
            placeholder="Cari barang yang ditemukan"
            className="rounded-full col-span-10"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

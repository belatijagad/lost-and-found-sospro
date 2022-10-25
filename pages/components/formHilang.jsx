import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function formHilang() {
    let [isOpen, setIsOpen] = useState(true)
    return ( 
        <>
        <button onClick={() => setIsOpen(true)}>Teken saia</button>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed top-0 left-0 z-50 bg-sky-100"
        >
            <Dialog.Panel>
                <Dialog.Title>Kehilangan barang?</Dialog.Title>
                <Dialog.Description>Tes 123</Dialog.Description>
                <p>Yakin hilang deck?</p>
                <button onClick={() => setIsOpen(false)}>tutup</button>
            </Dialog.Panel>
        </Dialog>
        </>
     );
}
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"

export default function FormKetemu(props) {
    let [isOpen, setIsOpen] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            barang: event.target.barang.value,
            tempat: event.target.tempat.value,
            kontak: event.target.kontak.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/ketemu'
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

    return ( 
        <>
        <button 
            className={props.className} 
            onClick={() => setIsOpen(true)}
        >
            Menemukan sesuatu?
        </button>
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed top-[25vh] left-[25vw] z-50 bg-sky-100 w-1/2 pt-3 pb-5 px-5"
        >
            <Dialog.Panel className="relative">
                <XMarkIcon 
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 cursor-pointer absolute top-2 right-0" 
                />
                <Dialog.Title 
                    className="text-center font-bold text-2xl"
                >
                    Nemu barang?
                </Dialog.Title>
                <Dialog.Description 
                    className="text-center text-lg"
                >
                    Tolong isi form berikut
                </Dialog.Description>
                <form 
                    className="flex flex-col p-5 gap-5"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        placeholder="Nama barang" 
                        id="barang"
                        name="barang"
                        autoComplete="off"
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Tempat nemu" 
                        id="tempat"
                        name="tempat"
                        autoComplete="off"
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Kontak" 
                        id="kontak"
                        name="kontak"
                        autoComplete="off"
                        required 
                    />
                    <button type="submit">Submit</button>
                </form>
            </Dialog.Panel>
        </Dialog>
        </>
     );
}
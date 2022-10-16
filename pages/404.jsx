import { useEffect } from "react"
import { useRouter } from "next/router"


export default function NotFound(){
    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            router.push("/")
        }, 3000)
    }, [])
    return(
        <>
            <h1>Page tidak ditemukan!</h1>
        </>
    )
}
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'


const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <h1 className='heading'>Error Page from NEXT JS</h1>

            <Navbar/>
        </>
    )
}

export default Error
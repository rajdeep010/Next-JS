import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from '../../components/Navbar'


const pageNo = () => {

    const router = useRouter()
    const pageNum = router.query.pageNo

    return (
        <>
            <h1 className='heading'>My blog {pageNum} with Global CSS </h1>

            <h3 style={{ color: 'red' }} >Inline CSS Content</h3>


            <h4>Internal CSS Content</h4>

            <Navbar />

            <style jsx>
                {`
                
                    h4{
                        color: green;
                    }
                `}
            </style>
        </>
    )
}

export default pageNo
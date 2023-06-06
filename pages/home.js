import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'



// provided by next js for fetching from nextjs
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: {
      rajdeep: data
    }
  }
}

const Home = ({ rajdeep }) => {
  const router = useRouter()

  return (
    <>
      <h1 className='heading'>Hello from home page</h1>

      <Navbar />

      <button onClick={() => router.push('/')}>
        Back to Dashboard
      </button>

      <br />
      <br />

      {rajdeep.slice(0, 5).map((currElm) => {
        return <div key={currElm.id}>
          <h3>{currElm.id}</h3>

          <Link href={`/content/${currElm.id}`}> 
            <h2 className='links'>{currElm.title}</h2>
          </Link>
        </div>
      })}

      <Image
        src='./vercel.svg'
        height={500}
        width={500}
      >
      </Image>
    </>
  )
}

export default Home
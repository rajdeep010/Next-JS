import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT JS</title>

        <meta charset="UTF-8" />
        <meta name="description" content="NEXT JS Tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next Js, React Js" />
        <meta name="author" content="Rajdeep Mallick" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className={styles.container}>

        <h1 className='heading'>Rajdeep Mallick</h1>

        <Navbar />

        <br />
        <br />

        {/* for this we have to include the domain name in the next.config */}
        <Image
          src='https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          height={500}
          width={500}
          alt='imageDP'
        >
        </Image>

      </div>
    </>

  )
}

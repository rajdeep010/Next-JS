import Navbar from "../../components/Navbar"


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((curr) => {
        return {
            params: { blogNo: curr.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.blogNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}


const blogNum = ({data}) => {

    return (
        <>
            <Navbar />
            
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </>
    )
}

export default blogNum
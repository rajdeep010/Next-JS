import Link from 'next/link'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
    return (
        <>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                    <Link href="/">First</Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/home">Home</Link>
                </li>
                <li className={`${styles.hello} ${styles.nav_item}`}>
                    <Link href="/blog/1">Blog 1</Link>
                </li>

            </ul>
        </>
    )
}

export default Navbar
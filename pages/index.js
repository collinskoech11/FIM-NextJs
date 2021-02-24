
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavPage from './Components/NavPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavPage/>
      <p>Hello Next.js</p>
        <Link href="/register">
            <a>Register</a>
        </Link>
    </div>
  )
}

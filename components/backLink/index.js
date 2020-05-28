import Link from 'next/link'
import styles from './backLink.module.scss'

export default function BackLink() {
  return (
    <nav className={styles.backLink}>
      <Link href="/">
        <a aria-label="go back to homepage" className={styles.arrow}></a>
      </Link>
    </nav>
  )
}

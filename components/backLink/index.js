import Link from 'next/link'
import styles from './backLink.module.scss'

export default function BackLink() {
  return (
    <nav className={styles.backLink}>
      <div className={styles.arrowContainer}>
        <Link href="/">
          <a aria-label="go back to homepage" className={styles.arrow}></a>
        </Link>
      </div>
    </nav>
  )
}

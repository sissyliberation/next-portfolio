import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a className={styles.link} href="https://github.com/novacourtois" target="_blank">github</a>

        <a className={styles.link} href="mailto:novaskye@protonmail.com">email</a>
      </div>
    </footer>
  )
}

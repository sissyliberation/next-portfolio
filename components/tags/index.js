import styles from './tags.module.scss'

export default function Tags(tags) {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.tags}>
        {
          tags.tags.map((tag, index) => <li key={tag} className={styles.tag}>{tag}</li> )
        }
        </ul>
      </div>
    </>
  )
}

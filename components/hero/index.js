import styles from './hero.module.scss'



console.log(styles);

export default function Hero() {
  const hero = {
    title: 'im nova skye',
    text: [
      `my pronouns are <span class=${styles.pronouns}>they</span> or <span class=${styles.pronouns}>she</span>`,
      'i make things',
      'i try not to make things worse'
    ],
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{hero.title}</h1>
        <div className={`${styles.text} ${styles.text1}`} dangerouslySetInnerHTML={{
          __html: hero.text[0]
        }}></div>
        <div className={`${styles.text} ${styles.text2}`} dangerouslySetInnerHTML={{
          __html: hero.text[1]
        }}></div>
        <div className={`${styles.text} ${styles.text3}`} dangerouslySetInnerHTML={{
          __html: hero.text[2]
        }}></div>
      </div>
    </section>
  )
}

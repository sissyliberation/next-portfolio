import styles from './hero.module.scss'

const hero = {
  title: 'hi, im nova skye',
  text: [
    'my pronouns are <span classNmae="hero__accent">they</span> or <span className="hero__accent">she</span>.',
    'i make things. i try not to make things worse.',
  ],
};

console.log(styles);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="hero-container">
        <h1 className="hero-title">{hero.title}</h1>
        <div className="hero-text" dangerouslySetInnerHTML={{
          __html: hero.text[0]
        }}></div>
        <div className="hero-text" dangerouslySetInnerHTML={{
          __html: hero.text[1]
        }}></div>
      </div>
    </section>
  )
}

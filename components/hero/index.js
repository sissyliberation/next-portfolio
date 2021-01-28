import React, { useState, useEffect } from 'react'
import styles from './hero.module.scss'
import {aosVariables} from '../../lib/constants';

export default function Portfolio(props) {
  let animationIndex = 1;
  const [heroClass, setClass] = useState(styles.hero);

  const handleHeroAnimation = () => {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    setClass(scrollTop ? `${styles.hero} ${styles.scrolled}` : styles.hero);
  }

  useEffect(() => {
    handleHeroAnimation();
    window.addEventListener('scroll', handleHeroAnimation);
    return () => window.removeEventListener('scroll', handleHeroAnimation);
  });

  const hero = {
    title: 'im nova skye',
    text: [
      `my pronouns are <span class=${styles.pronouns}>they</span> / <span class=${styles.pronouns}>she</span>`,
      'i make things',
      'i try not to make things worse'
    ],
  };

  return (
    <section className={heroClass}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}>
            {hero.title}
          </span>
        </h1>

        <div className={`${styles.text} ${styles.text1}`}>
          <span dangerouslySetInnerHTML={{ __html: hero.text[0] }}
            data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}></span>
        </div>

        <div className={`${styles.text} ${styles.text2}`}>
          <span dangerouslySetInnerHTML={{ __html: hero.text[1] }}
            data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}></span>
        </div>

        <div className={`${styles.text} ${styles.text3}`}>
          <span dangerouslySetInnerHTML={{ __html: hero.text[2] }}
            data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}></span>
        </div>
      </div>
      <div className={styles.portraitWrapper}>
        <img src={"/assets/hero/portrait.jpg"} className={styles.portrait} data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}/>
      </div>
    </section>
  )
}

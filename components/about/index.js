import React, { useState, useEffect } from 'react'
import styles from './about.module.scss'
import {aosVariables} from '../../lib/constants';

export default function Portfolio(props) {
  let animationIndex = 1;

  const about = {
    title: 'get to know me',
    text: [
      `im latinx + non-binary. i like working on bleeding-edge stuff + making tech accessible. i care more about helping folks than about profit. oh, and im vegan.`,
      `when im not coding, catch me at a skate park, at a needle exchange providing life-saving supplies + resources to under-served communities, and taking care of my babies (cats + plants).`
    ],
  };

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}>
          {about.title}
        </h2>

        <div className={styles.textContainer}>
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: about.text[0] }}
            data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}></div>

          <div className={styles.text} dangerouslySetInnerHTML={{ __html: about.text[1] }}
            data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}></div>
        </div>
      </div>
    </section>
  )
}

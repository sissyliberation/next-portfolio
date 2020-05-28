import AOS from 'aos';
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import markdownStyles from '../../components/markdown-styles.module.css'
import styles from './postPage.module.scss'
import aosVariables from '../aosVariables';

export default function PostPage({post}) {
  let animationIndex = 1;

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      once: true,
      anchor: 'center-top',
    })
  })

  return (
    <>
    <Head>
      <title> {post.title} | nova skye </title>
      <meta property="og:image" content={post.ogImage.url} />
    </Head>

    <article className={styles.postPage}>
      <h1 className={styles.title}>
        <span data-aos={aosVariables.animation}
        data-aos-delay={aosVariables.delay * animationIndex++}>
          {post.title}
        </span>
      </h1>

      <div className={styles.coverImageWrapper} data-aos={aosVariables.animation}
        data-aos-delay={aosVariables.delay * animationIndex++}>
        <img className={styles.coverImage}
          src={post.coverImage}
          alt={`Cover Image for ${post.title}`} />
      </div>

      <div className={`${markdownStyles['markdown']} ${styles.text}`}
        dangerouslySetInnerHTML={{ __html: post.content }}
        data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++} />
    </article>
    </>
  )
}

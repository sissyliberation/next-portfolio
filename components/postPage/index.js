import AOS from 'aos';
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import markdownStyles from '../markdown-styles.module.css'
import styles from './postPage.module.scss'
import {aosVariables} from '../../lib/constants';
import Tags from '../../components/tags'

export default function PostPage({post}) {
  const linkKeys = post.links ? Object.keys(post.links) : null;
  let animationIndex = 1;

  useEffect(() => {
    AOS.init(aosVariables.init)
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

        {post.tags && (
          <Tags tags={post.tags} />
        )}
      </div>

      <div className={`${markdownStyles['markdown']} ${styles.text}`}
        data-aos={aosVariables.animation} data-aos-delay={aosVariables.delay * animationIndex++}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        { linkKeys && (
          <div>
            Check it out
            {
              linkKeys.map((link, linkIndex) => {
                return linkIndex < linkKeys.length - 1 ?
                  <>&nbsp;<a href={post.links[link]} target='_blank'>here</a> and</>
                  : <>&nbsp;<a href={post.links[link]} target='_blank'>here</a>.</>
              })
            }
          </div>
        )}
      </div>
    </article>
    </>
  )
}

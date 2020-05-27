import AOS from 'aos';
import React, { useState, useEffect } from 'react'

import Portfolio from '../components/portfolio'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

import Hero from '../components/hero'
import PageHead from '../components/pageHead'

export default function Index({ allPosts }) {
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
      <Layout>
        <PageHead />
        <Hero />
        {allPosts.length && <Portfolio posts={allPosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'order',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}

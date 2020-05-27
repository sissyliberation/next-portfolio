import Portfolio from '../components/portfolio'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

import Hero from '../components/hero'
import PageHead from '../components/pageHead'

export default function Index({ allPosts }) {
  console.log(allPosts);

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
  ]).sort((a, b) => a.order - b.order)

  return {
    props: { allPosts },
  }
}

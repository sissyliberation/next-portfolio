import Head from 'next/head'
import markdownStyles from '../../components/markdown-styles.module.css'

export default function PostPage({post}) {
  console.log('- - - -');
  console.log(post);
  return (
    <article>
      <Head>
        <title> {post.title} | nova skye </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>

      <h1>{post.title}</h1>

      <img src={post.coverImage} alt={`Cover Image for ${post.title}`} />

      <div className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

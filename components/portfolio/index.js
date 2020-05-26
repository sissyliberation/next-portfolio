import PostPreview from '../post-preview'
import styles from './portfolio.module.scss'

export default function Portfolio({ posts }) {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          stuff ive made
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

import PortfolioItem from '../portfolioItem'
import styles from './portfolio.module.scss'

export default function Portfolio({ posts }) {
  return (
    <section className={styles.portfolio}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PortfolioItem
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            type={post.type}
          />
        ))}
      </div>
    </section>
  )
}

import Avatar from '../avatar'
import DateFormater from '../date-formater'
import CoverImage from '../cover-image'
import Link from 'next/link'
import styles from './portfolioItem.module.scss'

export default function PortfolioItem({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,

}) {
  return (
    <div className={styles.item}>

      <Link as={`/posts/${slug}`} href="/posts/[slug]" >

      <a className={styles.link}>
        <img
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className={styles.image}
        />
        
        <h3 className={styles.title}>{title}</h3>
        {
          // <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          // <Avatar name={author.name} picture={author.picture} />
        }
      </a>



      </Link>
    </div>
  )
}

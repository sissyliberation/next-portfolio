import Avatar from '../avatar'
import DateFormater from '../date-formater'
import CoverImage from '../cover-image'
import Link from 'next/link'
import styles from './portfolioItem.module.scss'
import aosVariables from '../aosVariables';

export default function PortfolioItem({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className={styles.item} data-aos={aosVariables.animation}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" >
        <a className={styles.link}>
          <div className={styles.imageWrapper}>
            <img
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className={styles.image}
            />
          </div>

          <h3 className={styles.title}>{title}</h3>
        </a>
      </Link>
    </div>
  )
}

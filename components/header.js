import Link from 'next/link'

export default function Header() {
  return (
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
  )
}

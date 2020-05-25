import Head from 'next/head'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="container">
      <PageHead />
      <main>
        <Hero />
      </main>
    </div>
  )
}

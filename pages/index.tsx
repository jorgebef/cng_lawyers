import type { NextPage } from 'next'
import Head from 'next/head'
import { AOSCard } from '../components/aosCard/AOSCard'
import { Hero } from '../components/hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CNG Lawyers - Home</title>
        <meta
          name='Home'
          content='CNG Lawyers - The lawfirm you can trust in Spain'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <AOSCard />
        <AOSCard />
        <AOSCard />
        <AOSCard />
        <AOSCard />
        <AOSCard />
      </main>
    </>
  )
}

export default Home

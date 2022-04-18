import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/hero'

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CNG Lawyers - Services</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <Hero />
      </main>

      <div style={{ padding: '100px' }}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
        </a>
      </div>
    </div>
  )
}

export default Services

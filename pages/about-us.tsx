import type { NextPage } from 'next'
import Head from 'next/head'

const Test: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>CNG Lawyers - About us</title>
        <meta name='CNG Lawyers about us' content='About CNG Lawyers, international lawfirm' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
      <div style={{ padding: '100px' }}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
        </a>
      </div>
      </main>

    </div>
  )
}

export default Test

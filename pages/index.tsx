import { Blockquote, Container, useMantineTheme } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AOSCard } from '../components/aosCard/AOSCard'
import { Hero } from '../components/hero'

const Home: NextPage = () => {
  const theme = useMantineTheme()

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
        <Container
          py={theme.spacing.xl}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
          }}
        >
          <AOSCard xfrom='-100%'>
            <Blockquote cite='- Mrs. Grimason'>
              I bought a property in Torrevieja and I feel fortunate to have
              dealt with this company. Once I put a deposit down and I met
              Javier, he prepared a Power of Attorney for us to sign before we
              flew back and left everything in their hands. On our next trip
              back we had the keys to our apartment and everything was in our
              name, absolutely worry free.
            </Blockquote>
          </AOSCard>
          <AOSCard xfrom='100%'>
            <Blockquote cite='- Mr. Rowland'>
              CNG Lawyers have been a life saver for me, where others didn’t
              want to take the job, Daniel not only accepted it, but also made
              me feel safe and backed up by a team that deserves my trust.
            </Blockquote>
          </AOSCard>
          <AOSCard xfrom='-100%'>
            <Blockquote cite='- Mrs. Convy'>
              After my husband passed away I was completely lost and didn’t know
              what to do in Spain. Thankfully I met George who helped me with
              the inheritance process and now is more than my lawyer, I feel he
              is part of the family.
            </Blockquote>
          </AOSCard>
        </Container>
      </main>
    </>
  )
}

export default Home

import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat with</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <Container maxWidth="md">
            <img src='/devguy.gif' style={{ margin: 'auto' }}></img>
        </Container>
      </main>
    </>
  )
}

export default Home

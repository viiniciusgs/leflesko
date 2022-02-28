import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leflesko</title>
      </Head>

      <Container>
        <Header />

        <h2>My page</h2>
      </Container>
    </>
  )
}

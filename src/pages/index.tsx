import React from 'react'
import Head from 'next/head'

import { Header } from '../styles/components/Header'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leflesko</title>
      </Head>

      <Header>
        <h1>Leflesko</h1>
      </Header>

      <Container>
        <h2>My page</h2>
      </Container>
    </>
  )
}

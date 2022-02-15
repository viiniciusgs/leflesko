import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leflesko</title>
      </Head>

      <Container>
        <h1>My page</h1>
      </Container>
    </>
  )
}

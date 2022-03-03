import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import Keyboard from '../components/Keyboard'

import { Container } from '../styles/pages/Home'

const mock = 'teste'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leflesko</title>
      </Head>

      <Container>
        <Header />

        <Main wordOfDay={mock} />

        <Keyboard wordOfDay={mock} />
      </Container>
    </>
  )
}

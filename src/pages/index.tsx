import React, { useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import Keyboard from '../components/Keyboard'

import { useWord } from '../hooks/useWord'
import { useWordOfDay } from '../hooks/useWordOfDay'

import { Container } from '../styles/pages/Home'

export default function Home({
  wordOfDay,
  validWords,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { word, handleWord, index, handleIndex, finished, handleFinished } =
    useWord()

  useEffect(() => {
    const solution = localStorage.getItem('solution')
    const tries = localStorage.getItem('tries')

    if (solution !== wordOfDay) {
      localStorage.removeItem('tries')
      localStorage.removeItem('finished')
      localStorage.setItem('solution', wordOfDay)
      handleWord([[]])
      handleIndex(0)
      handleFinished(false)

      return
    }

    if (tries) {
      const triedWords = JSON.parse(tries)
      const triedIndex = JSON.parse(tries).length
      const finishedLocal = localStorage.getItem('finished')
      const isFinished = JSON.parse(finishedLocal as string)

      handleWord(triedWords)

      if (!isFinished) {
        handleIndex(triedIndex)
      } else {
        handleFinished(true)
      }
    }
  }, [])

  const { handleWordOfDay } = useWordOfDay()

  const solution = handleWordOfDay(wordOfDay)

  function handleBackspace() {
    if (finished) {
      return
    }

    if (word && word[index] && word[index][0]) {
      const deletedLetter = word
        .slice(0, index)
        .concat([word[index].slice(0, -1)])

      handleWord(deletedLetter)
    }
  }

  function handleSubmit() {
    if (finished) {
      return
    }

    if (word && word[index] && word[index].length === 5) {
      const wordInString =
        word[index][0].letter +
        word[index][1].letter +
        word[index][2].letter +
        word[index][3].letter +
        word[index][4].letter

      validWords.forEach((element: string) => {
        const validWord = element.toLowerCase()

        if (validWord === wordInString) {
          for (let i = 0; i <= word[index].length - 1; i++) {
            for (let j = 0; j <= word[index].length - 1; j++) {
              if (word[index][i].letter === solution[j].letter && i === j) {
                word[index][i].success = true
                solution[j].success = true
              }
            }
          }

          for (let i = 0; i <= word[index].length - 1; i++) {
            for (let j = 0; j <= word[index].length - 1; j++) {
              if (
                word[index][i].letter === solution[j].letter &&
                !solution[j].success &&
                !solution[j].alert &&
                !word[index][i].success &&
                !word[index][i].alert
              ) {
                word[index][i].alert = true
                solution[j].alert = true
              } else {
                word[index][i].error = true
              }
            }
          }

          if (wordInString === wordOfDay) {
            console.log('palavra correta')

            localStorage.setItem('finished', JSON.stringify(true))
            handleFinished(true)
          } else if (index < 5) {
            handleIndex(index + 1)
          } else {
            console.log('palavra incorreta')

            localStorage.setItem('finished', JSON.stringify(true))
            handleFinished(true)
          }

          localStorage.setItem('tries', JSON.stringify(word))
        }
      })
    }
  }

  return (
    <>
      <Head>
        <title>Leflesko</title>
      </Head>

      <Container>
        <Header />

        <Main onSubmit={handleSubmit} onBackspace={handleBackspace} />

        <Keyboard onSubmit={handleSubmit} onBackspace={handleBackspace} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}`)
  const data = await res.json()
  const wordOfDay: string = data.word.toLowerCase()

  const resValidWords = await fetch(`${process.env.API_URL}/all`)
  const dataValidWords = await resValidWords.json()
  const validWords: string[] = dataValidWords.words

  return {
    props: {
      wordOfDay,
      validWords,
    },

    revalidate: 10,
  }
}

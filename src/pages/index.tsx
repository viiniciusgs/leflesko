import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Header from '../components/Header'
import Main from '../components/Main'
import Keyboard from '../components/Keyboard'

import { Container } from '../styles/pages/Home'
import { useWord } from '../hooks/useWord'
import { useWordOfDay } from '../hooks/useWordOfDay'

type WordOfDayData = {
  createdAt: string
  id: number
  word: string
}

export default function Home({
  wordOfDay,
  allWords,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    word,
    handleSetWord,
    index,
    handleSetIndex,
    finished,
    handleSetFinished,
  } = useWord()

  useEffect(() => {
    const wordOfDayLocal = localStorage.getItem('wordOfDay')
    const wordLocal = localStorage.getItem('word')
    const finishedLocal = localStorage.getItem('finished')

    if (wordOfDayLocal !== wordOfDay) {
      localStorage.removeItem('word')
      localStorage.removeItem('finished')
      localStorage.setItem('wordOfDay', wordOfDay)
      handleSetWord([[]])
      handleSetIndex(0)
      handleSetFinished(false)
      return
    }

    if (wordLocal) {
      handleSetWord(JSON.parse(wordLocal))

      if (!JSON.parse(finishedLocal as string)) {
        handleSetIndex(JSON.parse(wordLocal).length)
      } else {
        handleSetFinished(true)
      }
    }
  }, [])

  const { handleCorrectWordSplit, handleCorrectWordArrayOfObject } =
    useWordOfDay()

  const correctWordSplit = handleCorrectWordSplit(wordOfDay)

  const correctWordArrayOfObject =
    handleCorrectWordArrayOfObject(correctWordSplit)

  function handleBackspace() {
    if (finished) {
      return
    }

    if (word && word[index] && word[index][0]) {
      handleSetWord(word.slice(0, index).concat([word[index].slice(0, -1)]))
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

      allWords.forEach((validWord: string) => {
        if (validWord.toLowerCase() === wordInString) {
          for (let i = 0; i <= word[index].length - 1; i++) {
            for (let j = 0; j <= word[index].length - 1; j++) {
              if (
                word[index][i].letter === correctWordArrayOfObject[j].letter &&
                i === j
              ) {
                word[index][i].success = true
                correctWordArrayOfObject[j].success = true
              } else {
                word[index][i].error = true
              }
            }
          }

          for (let i = 0; i <= word[index].length - 1; i++) {
            for (let j = 0; j <= word[index].length - 1; j++) {
              if (
                word[index][i].letter === correctWordArrayOfObject[j].letter &&
                !correctWordArrayOfObject[j].success &&
                !correctWordArrayOfObject[j].alert &&
                !word[index][i].success &&
                !word[index][i].alert
              ) {
                word[index][i].alert = true
                correctWordArrayOfObject[j].alert = true
              } else {
                word[index][i].error = true
              }
            }
          }

          if (wordInString === wordOfDay) {
            console.log('palavra correta')
            localStorage.setItem('word', JSON.stringify(word))
            localStorage.setItem('finished', JSON.stringify(true))
            handleSetFinished(true)
          } else if (index < 5) {
            localStorage.setItem('word', JSON.stringify(word))
            handleSetIndex(index + 1)
          } else {
            console.log('palavra incorreta')
            localStorage.setItem('word', JSON.stringify(word))
            localStorage.setItem('finished', JSON.stringify(true))
            handleSetFinished(true)
          }
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
  const data: WordOfDayData = await res.json()
  const wordOfDay = data.word.toLowerCase()

  const resAllWords = await fetch(`${process.env.API_URL}/all`)
  const dataAllWords = await resAllWords.json()
  const allWords = dataAllWords.words

  return {
    props: {
      wordOfDay,
      allWords,
    },

    revalidate: 10,
  }
}

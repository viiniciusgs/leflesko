import React, { createContext, useState } from 'react'

type WordType = {
  letter: string
  success: boolean
  alert: boolean
  error: boolean
}

type WordContextType = {
  word: WordType[][]
  index: number
  finished: boolean
  handleWord: (value: WordType[][]) => void
  handleIndex: (value: number) => void
  handleFinished: (value: boolean) => void
  handleKeyClick: (value: string) => void
}

export const WordContext = createContext({} as WordContextType)

export function WordProvider({ children }: { children: React.ReactNode }) {
  const [word, setWord] = useState<WordType[][]>([[]])
  const [index, setIndex] = useState<number>(0)
  const [finished, setFinished] = useState<boolean>(false)

  function handleWord(value: WordType[][]) {
    setWord(value)
  }

  function handleIndex(value: number) {
    setIndex(value)
  }

  function handleFinished(value: boolean) {
    setFinished(value)
  }

  function handleKeyClick(value: string) {
    if (finished) {
      return
    }

    if (!word) {
      handleWord([
        [
          {
            letter: value,
            success: false,
            alert: false,
            error: false,
          },
        ],
      ])
    } else if (!word[index]) {
      handleWord([
        ...word,
        [
          {
            letter: value,
            success: false,
            alert: false,
            error: false,
          },
        ],
      ])
    } else if (word[index].length < 5) {
      word[index].push({
        letter: value,
        success: false,
        alert: false,
        error: false,
      })

      handleWord([...word])
    }
  }

  return (
    <WordContext.Provider
      value={{
        word,
        handleWord,
        index,
        handleIndex,
        finished,
        handleFinished,
        handleKeyClick,
      }}
    >
      {children}
    </WordContext.Provider>
  )
}

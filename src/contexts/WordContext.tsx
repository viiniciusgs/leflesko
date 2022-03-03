import React, { createContext, useState } from 'react'

type Word = {
  letter: string
  success: boolean
  alert: boolean
  error: boolean
}

type WordContextType = {
  word: Word[][] | null
  handleSetWord: (value: Word[][]) => void
  index: number
  handleSetIndex: (value: number) => void
  finished: boolean
  handleSetFinished: (value: boolean) => void
}

export const WordContext = createContext({} as WordContextType)

export function WordProvider({ children }: { children: React.ReactNode }) {
  const [word, setWord] = useState<Word[][] | null>(null)
  const [index, setIndex] = useState<number>(0)
  const [finished, setFinished] = useState<boolean>(false)

  function handleSetWord(value: Word[][]) {
    setWord(value)
  }

  function handleSetIndex(value: number) {
    setIndex(value)
  }

  function handleSetFinished(value: boolean) {
    setFinished(value)
  }

  return (
    <WordContext.Provider
      value={{
        word,
        handleSetWord,
        index,
        handleSetIndex,
        finished,
        handleSetFinished,
      }}
    >
      {children}
    </WordContext.Provider>
  )
}

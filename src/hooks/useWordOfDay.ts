export function useWordOfDay() {
  function handleCorrectWordSplit(wordOfDay: string) {
    return wordOfDay.split('')
  }

  function handleCorrectWordArrayOfObject(correctWordSplit: string[]) {
    return [
      {
        letter: correctWordSplit[0],
        success: false,
        alert: false,
      },
      {
        letter: correctWordSplit[1],
        success: false,
        alert: false,
      },
      {
        letter: correctWordSplit[2],
        success: false,
        alert: false,
      },
      {
        letter: correctWordSplit[3],
        success: false,
        alert: false,
      },
      {
        letter: correctWordSplit[4],
        success: false,
        alert: false,
      },
    ]
  }

  return { handleCorrectWordSplit, handleCorrectWordArrayOfObject }
}

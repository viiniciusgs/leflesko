export function useWordOfDay() {
  function handleWordOfDay(element: string) {
    const word = element.split('')

    return [
      {
        letter: word[0],
        success: false,
        alert: false,
      },
      {
        letter: word[1],
        success: false,
        alert: false,
      },
      {
        letter: word[2],
        success: false,
        alert: false,
      },
      {
        letter: word[3],
        success: false,
        alert: false,
      },
      {
        letter: word[4],
        success: false,
        alert: false,
      },
    ]
  }

  return { handleWordOfDay }
}

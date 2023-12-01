const otherPossibleDigits = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

export const solution = (input: string): string => {
  const entries = input.split('\n')
  let total: number = 0
  const numberOnlyEntry: string[] = []
  entries.forEach((entry) => {
    otherPossibleDigits.forEach((possibleDigit, index) => {
      const hasWord = entry.indexOf(possibleDigit)
      const hasNumber = entry.indexOf('' + (index + 1))
      if (hasWord > -1 || hasNumber > -1) {
        numberOnlyEntry.unshift('' + (index + 1))
      }
    })
    const left = numberOnlyEntry.pop()
    const right = numberOnlyEntry.shift()
    const resultDigits = [right ?? left, left ?? right].join('')
    total += Number(resultDigits)
  })

  return '' + total
}

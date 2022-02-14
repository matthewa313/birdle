import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { getStoredIsHighContrastMode, getStoredIsLoveMode } from './localStorage'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n` + generateEmojiGrid(guesses) + '\n\nHappy Valentine\'s Day!'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      const isHighContrast = getStoredIsHighContrastMode()
      const isLove = getStoredIsLoveMode()
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              if (isHighContrast) {
                return '🧡'
              }
              if (isLove) {
                return '❤️‍🔥'
              }
              return '💚'
            case 'present':
              if (isHighContrast) {
                return '💙'
              }
              if (isLove) {
                return '💖'
              }
              return '💙'
            default:
              if (localStorage.getItem('theme') === 'dark') {
                return '🖤'
              }
              return '🤍'
          }
        })
        .join('')
    })
    .join('\n')
}

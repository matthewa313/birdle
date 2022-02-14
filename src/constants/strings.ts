export const GAME_TITLE = 'Birdle'

export const WIN_MESSAGES = ['A budding ornithologist!',
                             'Mr. Kraft would be proud.',
                             'Bird-brain...?',
                             'The early bird gets the worm!',
                             'Toucan play at this game...',
                             'Beak performance!',
                             'Way to wing it!',
                             'A jack of owl trades!',
                             'You\'re a know-it-owl...',
                             'Hoot have thought it\'d be so easy?',
                             'You have an eagle eye for this game!',
                             'Wren did you get so good?',
                             'Your talent is taking flight!',
                             'Birds are raven\' about your skills!']

export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const ABOUT_GAME_MESSAGE = 'About Birdle'

export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'

export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Try a bird-related word'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The bird was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`

export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'

export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New bird in...'
export const SHARE_TEXT = 'SHARE'
export const SHARE_TITLE = 'Birdle'
export const TOTAL_TRIES_TEXT = 'Played'
export const SUCCESS_RATE_TEXT = 'Win %'
export const CURRENT_STREAK_TEXT = 'Streak'
export const BEST_STREAK_TEXT = 'Max Streak'

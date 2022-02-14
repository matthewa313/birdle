import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode, getStoredIsLoveMode } from '../../lib/localStorage'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH
  const isHighContrast = getStoredIsHighContrastMode()
  const isLove = getStoredIsLoveMode()

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        !status,
      'bg-slate-400 dark:bg-slate-800 text-white': status === 'absent',
      
      'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white':
        status === 'correct' && isHighContrast && !isLove,
      'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white':
        status === 'present' && isHighContrast && !isLove,
      
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        status === 'correct' && !isHighContrast && !isLove,
      'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
        status === 'present' && !isHighContrast && !isLove,
      
      'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white':
        status === 'correct' && !isHighContrast && isLove,
      'bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white':
        status === 'present' && !isHighContrast && isLove,
      
      'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white':
        status === 'correct' && isHighContrast && isLove,
      'bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white':
        status === 'present' && isHighContrast && isLove,
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}

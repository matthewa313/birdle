import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to Play Birdle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the BIRDLE (any bird type) in 6 tries. Each guess must be a 5-letter bird-related word. After each guess, the color of the tiles
        changes to show how close your guess is to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="V" status="present" />
        <Cell value="E" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter V is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="W" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is not in the word in any spot.
      </p>
    </BaseModal>
  )
}

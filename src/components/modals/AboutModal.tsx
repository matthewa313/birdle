import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Creek's Birdle. Wordle, about birds only. Concept by Steele Billings. Code by Matthew Anderson.
      </p>
    </BaseModal>
  )
}

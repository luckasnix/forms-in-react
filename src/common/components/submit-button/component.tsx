import type { SubmitButtonProps } from './types'

export const SubmitButton = ({ label }: SubmitButtonProps) => (
  <button type='submit'>{label}</button>
)

import { useContext } from 'react'

import { SignupFormContext } from './context'

export const useSignupFormContext = () => {
  const context = useContext(SignupFormContext)
  if (!context) {
    throw new Error('useSignupFormContext must be used inside the SignupFormProvider')
  }
  return context
}

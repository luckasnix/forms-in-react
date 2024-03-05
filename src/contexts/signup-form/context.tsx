import { createContext, useReducer, useCallback } from 'react'

import { initialSignupFormState, signupFormReducer, signupFormSchema } from './constants'
import type { SignupFormContextValue, SignupFormProviderProps } from './types'

export const SignupFormContext = createContext<SignupFormContextValue | null>(null)

export const SignupFormProvider = ({ children }: SignupFormProviderProps) => {
  const [signupFormState, signupFormDispatch] = useReducer(signupFormReducer, initialSignupFormState)

  const validateFields = useCallback(() => {
    const parsedFields = signupFormSchema.safeParse({
      name: signupFormState.name,
      gender: signupFormState.gender,
      educationLevel: signupFormState.educationLevel,
      wasAgreed: signupFormState.wasAgreed,
    })
    if (parsedFields.success) {
      signupFormDispatch({ type: 'RESET_FIELDS' })
    } else {
      const fieldErrors = parsedFields.error.flatten().fieldErrors
      signupFormDispatch({
        type: 'SET_ERRORS',
        payload: {
          nameErrors: fieldErrors?.name ? fieldErrors.name : [],
          genderErrors: fieldErrors?.gender ? fieldErrors.gender : [],
          educationLevelErrors: fieldErrors?.educationLevel ? fieldErrors.educationLevel : [],
          wasAgreedErrors: fieldErrors?.wasAgreed ? fieldErrors.wasAgreed : [],
        },
      })
    }
  }, [signupFormState])

  return (
    <SignupFormContext.Provider value={{ signupFormState, signupFormDispatch, validateFields }}>
      {children}
    </SignupFormContext.Provider>
  )
}

import type { ReactNode, Dispatch } from 'react'

import { genderValue, genderLabel, educationLevelValue, educationLevelLabel } from './constants'

export type GenderLabel = typeof genderLabel[number]

export type GenderValue = typeof genderValue[number]

export type Gender = {
  value: GenderValue
  label: GenderLabel
}

export type EducationLevelLabel = typeof educationLevelLabel[number]

export type EducationLevelValue = typeof educationLevelValue[number]

export type EducationLevel = {
  value: EducationLevelValue
  label: EducationLevelLabel
}

export type SignupFormState = {
  name: string
  gender: GenderValue | ''
  educationLevel: EducationLevelValue | ''
  wasAgreed: boolean
  nameErrors: Array<string>
  genderErrors: Array<string>
  educationLevelErrors: Array<string>
  wasAgreedErrors: Array<string>
}

export type SignupFormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_GENDER'; payload: GenderValue | '' }
  | { type: 'SET_EDUCATION_LEVEL'; payload: EducationLevelValue | '' }
  | { type: 'SET_WAS_AGREED'; payload: boolean }
  | { type: 'SET_NAME_ERRORS'; payload: Array<string> }
  | { type: 'SET_GENDER_ERRORS'; payload: Array<string> }
  | { type: 'SET_EDUCATION_LEVEL_ERRORS'; payload: Array<string> }
  | { type: 'SET_WAS_AGREED_ERRORS'; payload: Array<string> }
  | { type: 'RESET_FIELDS' }
  | { type: 'SET_ERRORS'; payload: { nameErrors: Array<string>, genderErrors: Array<string>, educationLevelErrors:  Array<string>, wasAgreedErrors: Array<string> } }

export type SignupFormContextValue = {
  signupFormState: SignupFormState
  signupFormDispatch: Dispatch<SignupFormAction>
  validateFields: () => void
}

export type SignupFormProviderProps = {
  children: ReactNode
}

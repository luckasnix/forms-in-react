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

export type SignupFormStates = {
  name: string
  gender: GenderValue | ''
  educationLevel: EducationLevelValue | ''
  wasAgreed: boolean
  nameErrors: Array<string>
  genderErrors: Array<string>
  educationLevelErrors: Array<string>
  wasAgreedErrors: Array<string>
}

export type SignupFormActions = {
  setName: (name: string) => void
  setGender: (gender: GenderValue | '') => void
  setEducationLevel: (educationLevel: EducationLevelValue | '') => void
  setWasAgreed: (wasAgreed: boolean) => void
  validateFields: () => void
}

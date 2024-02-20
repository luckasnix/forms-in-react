export type GenderLabel = 'Feminino' | 'Masculino'

export type GenderValue = 'female' | 'male'

export type Gender = {
  value: GenderValue
  label: GenderLabel
}

export type EducationLevelLabel = 'Ensino Fundamental' | 'Ensino Médio' | 'Ensino Superior'

export type EducationLevelValue = 'primary' | 'secondary' | 'tertiary'

export type EducationLevel = {
  value: EducationLevelValue
  label: EducationLevelLabel
}

export type SignupFormStates = {
  name: string
  gender: GenderValue | ''
  educationLevel: EducationLevelValue | ''
  wasAgreed: boolean
}

export type SignupFormActions = {
  setName: (name: string) => void
  setGender: (gender: GenderValue | '') => void
  setEducationLevel: (educationLevel: EducationLevelValue | '') => void
  setWasAgreed: (wasAgreed: boolean) => void
  getFields: () => SignupFormStates
  resetFields: () => void
}

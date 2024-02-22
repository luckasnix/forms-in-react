import type { Gender, EducationLevel } from './types'

export const genderValue = ['female', 'male'] as const

export const genderLabel = ['Feminino', 'Masculino'] as const

export const educationLevelValue = ['primary','secondary', 'tertiary'] as const

export const educationLevelLabel = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'] as const

export const genders: Array<Gender> = [
  {
    value: 'female',
    label: 'Feminino',
  },
  {
    value: 'male',
    label: 'Masculino',
  },
]

export const educationLevels: Array<EducationLevel> = [
  {
    value: 'primary',
    label: 'Ensino Fundamental',
  },
  {
    value: 'secondary',
    label: 'Ensino Médio',
  },
  {
    value: 'tertiary',
    label: 'Ensino Superior',
  },
]

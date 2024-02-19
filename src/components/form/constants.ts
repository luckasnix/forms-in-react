import type { Gender, EducationLevel } from './types'

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

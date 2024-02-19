import type { Gender, EducationLevel } from './types'

export const genders: Array<Gender> = [
  {
    label: 'Feminino',
    value: 'female',
  },
  {
    label: 'Masculino',
    value: 'male',
  },
]

export const educationLevels: Array<EducationLevel> = [
  {
    label: 'Ensino Fundamental',
    value: 'primary',
  },
  {
    label: 'Ensino Médio',
    value: 'secondary',
  },
  {
    label: 'Ensino Superior',
    value: 'tertiary',
  },
]

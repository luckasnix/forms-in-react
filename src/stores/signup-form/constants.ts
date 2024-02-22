import { z } from 'zod'

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

export const signupFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve conter ao mesmo 2 caracteres' }),
  gender: z.enum(genderValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  educationLevel: z.enum(educationLevelValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  wasAgreed: z.literal(true, { errorMap: () => ({ message: 'Aceite os termos de uso e privacidade para prosseguir' })}),
})

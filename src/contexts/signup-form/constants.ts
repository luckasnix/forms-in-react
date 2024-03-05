import { z } from 'zod'

import type { Gender, EducationLevel, SignupFormState, SignupFormAction } from './types'

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

export const initialSignupFormState: SignupFormState = {
  name: '',
  gender: '',
  educationLevel: '',
  wasAgreed: false,
  nameErrors: [],
  genderErrors: [],
  educationLevelErrors: [],
  wasAgreedErrors: [],
}

export const signupFormReducer = (state: SignupFormState, action: SignupFormAction) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_GENDER':
      return { ...state, gender: action.payload }
    case 'SET_EDUCATION_LEVEL':
      return { ...state, educationLevel: action.payload }
    case 'SET_WAS_AGREED':
      return { ...state, wasAgreed: action.payload }
    case 'SET_NAME_ERRORS':
      return { ...state, nameErrors: action.payload }
    case 'SET_GENDER_ERRORS':
      return { ...state, genderErrors: action.payload }
    case 'SET_EDUCATION_LEVEL_ERRORS':
      return { ...state, educationLevelErrors: action.payload }
    case 'SET_WAS_AGREED_ERRORS':
      return { ...state, wasAgreedErrors: action.payload }
    case 'RESET_FIELDS':
      return { ...initialSignupFormState }
    case 'SET_ERRORS':
      return {
        ...state,
        nameErrors: action.payload.nameErrors,
        genderErrors: action.payload.genderErrors,
        educationLevelErrors: action.payload.educationLevelErrors,
        wasAgreedErrors: action.payload.wasAgreedErrors,
      }
    default:
      throw Error('Unknown action')
  }
}

export const signupFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve conter ao mesmo 2 caracteres' }),
  gender: z.enum(genderValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  educationLevel: z.enum(educationLevelValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  wasAgreed: z.literal(true, { errorMap: () => ({ message: 'Aceite os termos de uso e privacidade para prosseguir' })}),
})

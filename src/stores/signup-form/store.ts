import { create } from 'zustand'
import { z } from 'zod'

import { genderValue, educationLevelValue } from './constants'
import type { SignupFormStates, SignupFormActions } from './types'

export const SignupFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve conter ao mesmo 2 caracteres' }),
  gender: z.enum(genderValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  educationLevel: z.enum(educationLevelValue, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  wasAgreed: z.literal(true, { errorMap: () => ({ message: 'Aceite os termos de uso e privacidade para prosseguir' })}),
})

// export type SignupFormStates = z.infer<typeof SignupFormSchema>

export const validateFields = (formFields: SignupFormStates) => SignupFormSchema.safeParse(formFields)

export const useSignupFormStore = create<SignupFormStates & SignupFormActions>((set, get) => ({
  name: '',
  gender: '',
  educationLevel: '',
  wasAgreed: false,
  setName: (name) => set(() => ({ name })),
  setGender: (gender) => set(() => ({ gender })),
  setEducationLevel: (educationLevel) => set(() => ({ educationLevel })),
  setWasAgreed: (wasAgreed) => set(() => ({ wasAgreed })),
  getFields: () => ({
    name: get().name,
    gender: get().gender,
    educationLevel: get().educationLevel,
    wasAgreed: get().wasAgreed,
  }),
  resetFields: () => set(() => ({
    name: '',
    gender: '',
    educationLevel: '',
    wasAgreed: false,
  })),
}))

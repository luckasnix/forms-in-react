import { create } from 'zustand'

import { signupFormSchema } from './constants'
import type { SignupFormStates, SignupFormActions } from './types'

export const useSignupFormStore = create<SignupFormStates & SignupFormActions>((set, get) => ({
  name: '',
  gender: '',
  educationLevel: '',
  wasAgreed: false,
  nameErrors: [],
  genderErrors: [],
  educationLevelErrors: [],
  wasAgreedErrors: [],
  setName: (name) => set(() => ({ name })),
  setGender: (gender) => set(() => ({ gender })),
  setEducationLevel: (educationLevel) => set(() => ({ educationLevel })),
  setWasAgreed: (wasAgreed) => set(() => ({ wasAgreed })),
  validateFields: () => {
    const { name, gender, educationLevel, wasAgreed } = get()
    const parsedFields = signupFormSchema.safeParse({ name, gender, educationLevel, wasAgreed })
    if (parsedFields.success) {
      set(() => ({
        name: '',
        gender: '',
        educationLevel: '',
        wasAgreed: false,
        nameErrors: [],
        genderErrors: [],
        educationLevelErrors: [],
        wasAgreedErrors: [],
      }))
    } else {
      const fieldErrors = parsedFields.error.flatten().fieldErrors
      set(() => ({
        nameErrors: fieldErrors?.name ? fieldErrors.name : [],
        genderErrors: fieldErrors?.gender ? fieldErrors.gender : [],
        educationLevelErrors: fieldErrors?.educationLevel ? fieldErrors.educationLevel : [],
        wasAgreedErrors: fieldErrors?.wasAgreed ? fieldErrors.wasAgreed : [],
      }))
    }
  },
}))

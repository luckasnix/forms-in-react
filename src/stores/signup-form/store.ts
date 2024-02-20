import { create } from 'zustand'

import type { SignupFormStates, SignupFormActions } from './types'

export const useSignupFormStore = create<SignupFormStates & SignupFormActions>((set, get) => ({
  name: '',
  setName: (name) => set(() => ({ name })),
  gender: '',
  setGender: (gender) => set(() => ({ gender })),
  educationLevel: '',
  setEducationLevel: (educationLevel) => set(() => ({ educationLevel })),
  wasAgreed: false,
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

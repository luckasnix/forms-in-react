import { Store } from '@tanstack/react-store'

import { signupFormSchema } from './constants'
import type { SignupFormStore, GenderValue, EducationLevelValue } from './types'

export const signupFormStore = new Store<SignupFormStore>({
  name: '',
  gender: '',
  educationLevel: '',
  wasAgreed: false,
  nameErrors: [],
  genderErrors: [],
  educationLevelErrors: [],
  wasAgreedErrors: [],
})

export const setName = (name: string) => {
  signupFormStore.setState((state) => ({
    ...state,
    name,
  }))
}

export const setGender = (gender: GenderValue | '') => {
  signupFormStore.setState((state) => ({
    ...state,
    gender,
  }))
}

export const setEducationLevel = (educationLevel: EducationLevelValue | '') => {
  signupFormStore.setState((state) => ({
    ...state,
    educationLevel,
  }))
}

export const setWasAgreed = (wasAgreed: boolean) => {
  signupFormStore.setState((state) => ({
    ...state,
    wasAgreed,
  }))
}

export const validateFields = () => {
  const parsedFields = signupFormSchema.safeParse({
    name: signupFormStore.state.name,
    gender: signupFormStore.state.gender,
    educationLevel: signupFormStore.state.educationLevel,
    wasAgreed: signupFormStore.state.wasAgreed,
  })
  if (parsedFields.success) {
    window.console.log(signupFormStore.state);
    signupFormStore.setState(() => ({
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
    signupFormStore.setState((state) => ({
      ...state,
      nameErrors: fieldErrors?.name ? fieldErrors.name : [],
      genderErrors: fieldErrors?.gender ? fieldErrors.gender : [],
      educationLevelErrors: fieldErrors?.educationLevel ? fieldErrors.educationLevel : [],
      wasAgreedErrors: fieldErrors?.wasAgreed ? fieldErrors.wasAgreed : [],
    }))
  }
}

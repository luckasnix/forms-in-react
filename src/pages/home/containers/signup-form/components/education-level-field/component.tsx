import { useStore } from '@tanstack/react-store'

import { signupFormStore, setEducationLevel, educationLevels } from '@/stores/signup-form'
import { RadioGroup } from '@/common/components/radio-group'

export const EducationLevelField = () => {
  const educationLevel = useStore(signupFormStore, (state) => state.educationLevel)
  const educationLevelErrors = useStore(signupFormStore, (state) => state.educationLevelErrors)

  return (
    <RadioGroup
      id='education-level'
      name='education-level'
      label='Selecione o seu nível de escolaridade:'
      value={educationLevel}
      setValue={setEducationLevel}
      buttons={educationLevels}
      errors={educationLevelErrors}
    />
  )
}

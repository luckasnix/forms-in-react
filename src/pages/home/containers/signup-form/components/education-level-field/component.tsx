import { useStore } from '@tanstack/react-store'

import { signupFormStore, setEducationLevel, educationLevels } from '@/stores/signup-form'
import { RadioGroup } from '@/common/components/radio-group'

export const EducationLevelField = () => {
  const { educationLevel, educationLevelErrors } = useStore(signupFormStore, (state) => ({
    educationLevel: state.educationLevel,
    educationLevelErrors: state.educationLevelErrors,
  }))

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

import { useSignupFormContext, educationLevels, type EducationLevelValue } from '@/contexts/signup-form'
import { RadioGroup } from '@/common/components/radio-group'

export const EducationLevelField = () => {
  const { signupFormState, signupFormDispatch } = useSignupFormContext()
  
  return (
    <RadioGroup
      id='education-level'
      name='education-level'
      label='Selecione o seu nível de escolaridade:'
      value={signupFormState.educationLevel}
      setValue={(value: EducationLevelValue | '') => {
        signupFormDispatch({ type: 'SET_EDUCATION_LEVEL', payload: value })
      }}
      buttons={educationLevels}
      errors={signupFormState.educationLevelErrors}
    />
  )
}

import { useSignupForm, educationLevels } from '../../../../../../stores/signup-form'
import { RadioGroup } from '../../../../../../common/components/radio-group'

export const EducationLevelField = () => {
  const { educationLevel, setEducationLevel } = useSignupForm((state) => state)
  
  return (
    <RadioGroup
      id='education-level'
      name='education-level'
      label='Selecione o seu nível de escolaridade:'
      value={educationLevel}
      setValue={setEducationLevel}
      buttons={educationLevels} />
  )
}

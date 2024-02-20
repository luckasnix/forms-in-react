import { useShallow } from 'zustand/react/shallow'

import { useSignupFormStore, educationLevels } from '../../../../../../stores/signup-form'
import { RadioGroup } from '../../../../../../common/components/radio-group'

export const EducationLevelField = () => {
  const { educationLevel, setEducationLevel } = useSignupFormStore(
    useShallow((state) => ({ educationLevel: state.educationLevel, setEducationLevel: state.setEducationLevel }))
  )
  
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

import type { Dispatch, SetStateAction } from 'react'

import { RadioGroup } from '../../../../../../common/components/radio-group'
import { educationLevels } from '../../constants'
import type { EducationLevelValue } from '../../types'

type EducationLevelFieldProps = {
  educationLevel: EducationLevelValue | ''
  setEducationLevel: Dispatch<SetStateAction<EducationLevelValue | ''>>
}

export const EducationLevelField = ({ educationLevel, setEducationLevel }: EducationLevelFieldProps) => (
  <RadioGroup
    id='education-level'
    name='education-level'
    label='Selecione o seu nível de escolaridade:'
    value={educationLevel}
    setValue={setEducationLevel}
    buttons={educationLevels}
  />
)

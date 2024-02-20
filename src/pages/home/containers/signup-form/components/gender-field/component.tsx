import type { Dispatch, SetStateAction } from 'react'

import { Select } from '../../../../../../common/components/select'
import { genders } from '../../constants'
import type { GenderValue } from '../../types'

type GenderFieldProps = {
  gender: GenderValue | ''
  setGender: Dispatch<SetStateAction<GenderValue | ''>>
}

export const GenderField = ({ gender, setGender }: GenderFieldProps) => (
  <Select
    id='gender'
    name='gender'
    label='Selecione o seu gênero:'
    value={gender}
    setValue={setGender}
    options={genders}
    disabledOption={{
      value: '',
      label: 'Seu gênero',
    }}
  />
)

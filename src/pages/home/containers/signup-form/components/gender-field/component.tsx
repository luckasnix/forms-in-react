import { useShallow } from 'zustand/react/shallow'

import { useSignupFormStore, genders } from '../../../../../../stores/signup-form'
import { Select } from '../../../../../../common/components/select'

export const GenderField = () => {
  const { gender, setGender } = useSignupFormStore(
    useShallow((state) => ({ gender: state.gender, setGender: state.setGender }))
  )

  return (
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
}

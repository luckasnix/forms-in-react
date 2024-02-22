import { useShallow } from 'zustand/react/shallow'

import { useSignupFormStore, genders } from '@/stores/signup-form'
import { Select } from '@/common/components/select'

export const GenderField = () => {
  const { gender, genderErrors, setGender } = useSignupFormStore(
    useShallow((state) => ({ gender: state.gender, genderErrors: state.genderErrors, setGender: state.setGender }))
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
        label: 'Selecionar',
      }}
      errors={genderErrors}
    />
  )
}

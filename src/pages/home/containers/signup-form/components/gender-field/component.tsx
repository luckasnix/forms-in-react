import { useStore } from '@tanstack/react-store'

import { signupFormStore, setGender, genders } from '@/stores/signup-form'
import { Select } from '@/common/components/select'

export const GenderField = () => {
  const gender = useStore(signupFormStore, (state) => state.gender)
  const genderErrors = useStore(signupFormStore, (state) => state.genderErrors)

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

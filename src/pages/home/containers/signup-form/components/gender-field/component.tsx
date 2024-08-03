import { useStore } from '@tanstack/react-store'

import { signupFormStore, setGender, genders } from '@/stores/signup-form'
import { Select } from '@/common/components/select'

export const GenderField = () => {
  const { gender, genderErrors } = useStore(signupFormStore, (state) => ({
    gender: state.gender,
    genderErrors: state.genderErrors,
  }))

  return (
    <Select
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

import { useSignupForm, genders } from '../../../../../../stores/signup-form'
import { Select } from '../../../../../../common/components/select'

export const GenderField = () => {
  const { gender, setGender } = useSignupForm((state) => state)

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

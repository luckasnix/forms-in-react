import { useSignupFormContext, genders, type GenderValue } from '@/contexts/signup-form'
import { Select } from '@/common/components/select'

export const GenderField = () => {
  const { signupFormState, signupFormDispatch } = useSignupFormContext()

  return (
    <Select
      id='gender'
      name='gender'
      label='Selecione o seu gênero:'
      value={signupFormState.gender}
      setValue={(value: GenderValue | '') => {
        signupFormDispatch({ type: 'SET_GENDER', payload: value })
      }}
      options={genders}
      disabledOption={{
        value: '',
        label: 'Selecionar',
      }}
      errors={signupFormState.genderErrors}
    />
  )
}

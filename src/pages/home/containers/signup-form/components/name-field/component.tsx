import { useSignupFormContext } from '@/contexts/signup-form'
import { TextInput } from '@/common/components/text-input'

export const NameField = () => {
  const { signupFormState, signupFormDispatch } = useSignupFormContext()

  return (
    <TextInput
      id='name'
      name='name'
      label='Insira o seu nome:'
      placeholder='João da Silva'
      value={signupFormState.name}
      setValue={(value: string) => {
        signupFormDispatch({ type: 'SET_NAME', payload: value })
      }}
      errors={signupFormState.nameErrors}
    />
  )
}

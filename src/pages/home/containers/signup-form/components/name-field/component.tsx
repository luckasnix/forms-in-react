import { useStore } from '@tanstack/react-store'

import { signupFormStore, setName } from '@/stores/signup-form'
import { TextInput } from '@/common/components/text-input'

export const NameField = () => {
  const name = useStore(signupFormStore, (state) => state.name)
  const nameErrors = useStore(signupFormStore, (state) => state.nameErrors)

  return (
    <TextInput
      id='name'
      name='name'
      label='Insira o seu nome:'
      placeholder='João da Silva'
      value={name}
      setValue={setName}
      errors={nameErrors}
    />
  )
}

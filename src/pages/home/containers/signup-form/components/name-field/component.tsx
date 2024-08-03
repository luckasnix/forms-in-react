import { useStore } from '@tanstack/react-store'

import { signupFormStore, setName } from '@/stores/signup-form'
import { TextInput } from '@/common/components/text-input'

export const NameField = () => {
  const { name, nameErrors } = useStore(signupFormStore, (state) => ({
    name: state.name,
    nameErrors: state.nameErrors,
  }))

  return (
    <TextInput
      name='name'
      label='Insira o seu nome:'
      placeholder='João da Silva'
      value={name}
      setValue={setName}
      errors={nameErrors}
    />
  )
}

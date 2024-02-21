import { useShallow } from 'zustand/react/shallow'

import { useSignupFormStore } from '@/stores/signup-form'
import { TextInput } from '@/common/components/text-input'

export const NameField = () => {
  const { name, setName } = useSignupFormStore(
    useShallow((state) => ({ name: state.name, setName: state.setName }))
  )

  return (
    <TextInput
      id='name'
      name='name'
      label='Insira o seu nome:'
      placeholder='João da Silva'
      value={name}
      setValue={setName}
    />
  )
}

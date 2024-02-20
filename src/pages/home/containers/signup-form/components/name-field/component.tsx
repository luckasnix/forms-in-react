import { useSignupForm } from '../../../../../../stores/signup-form'
import { TextInput } from '../../../../../../common/components/text-input'

export const NameField = () => {
  const { name, setName } = useSignupForm((state) => state)

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

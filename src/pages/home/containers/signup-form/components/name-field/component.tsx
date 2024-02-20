import type { Dispatch, SetStateAction } from 'react'

import { TextInput } from '../../../../../../common/components/text-input'

type NameFieldProps = {
  name: string
  setName: Dispatch<SetStateAction<string>>
}

export const NameField = ({ name, setName }: NameFieldProps) => (
  <TextInput
    id='name'
    name='name'
    label='Insira o seu nome:'
    placeholder='João da Silva'
    value={name}
    setValue={setName}
  />
)

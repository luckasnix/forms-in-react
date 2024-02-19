import { useState } from 'react'

import { TextInput } from '../text-input'
import { Select } from '../select'
import { RadioGroup } from '../radio-group'
import { Checkbox } from '../checkbox'
import { SubmitButton } from '../submit-button'
import { genders, educationLevels } from './constants'
import type { GenderValue, EducationLevelValue } from './types'

import './styles.css'

export const Form = () => {
  // Estados dos campos do formulário
  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState<GenderValue | ''>('')
  const [educationLevel, setEducationLevel] = useState<EducationLevelValue | ''>('')
  const [wasAgreed, setWasAgreed] = useState<boolean>(false)

  // Função para resetar o formulário após o envio
  const resetForm = () => {
    setName('')
    setGender('')
    setEducationLevel('')
    setWasAgreed(false)
  }

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault() // Prevenir o comportamento padrão do evento "submit"
        window.alert(JSON.stringify({ name, gender, educationLevel, wasAgreed }))
        resetForm()
      }}
    >
      <h1>Dados Cadastrais</h1>
      <TextInput
        id='name'
        name='name'
        label='Insira o seu nome:'
        placeholder='João da Silva'
        value={name}
        setValue={setName}
      />
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
      <RadioGroup
        id='education-level'
        name='education-level'
        label='Selecione o seu nível de escolaridade:'
        value={educationLevel}
        setValue={setEducationLevel}
        buttons={educationLevels}
      />
      <Checkbox
        id='agreement'
        name='agreement'
        label='Declaro que as informações acima prestadas são verdadeiras'
        value={wasAgreed}
        setValue={setWasAgreed}
      />
      <SubmitButton label='Salvar' />
    </form>
  )
}

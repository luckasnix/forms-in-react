import { useState, Fragment } from 'react'

import { TextInput } from '../text-input'
import { Select } from '../select'
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
      {/* Elemento "radio" controlado */}
      <div>
        <label>Selecione o seu nível de escolaridade:</label>
        <br />
        {educationLevels.map(({ value, label }, index) => (
          <Fragment key={value}>
            <input
              type='radio'
              id={`education-level-${value}`}
              name={`education-level-${value}`}
              checked={educationLevel === value}
              value={value}
              onChange={(event) => setEducationLevel(event.target.value as EducationLevelValue)}
            />
            <label htmlFor={`education-level-${value}`}>{label}</label>
            {/* Não adiciona o elemento "br" após o último "radio" */}
            {index !== educationLevels.length - 1 && <br />}
          </Fragment>
        ))}
      </div>
      {/* Elemento "checkbox" controlado */}
      <div>
        <input
          type='checkbox'
          id='agreement'
          name='agreement'
          checked={wasAgreed}
          onChange={(event) => setWasAgreed(event.target.checked)}
        />
        <label htmlFor='agreement'>Declaro que as informações acima prestadas são verdadeiras</label>
      </div>
      <button type='submit'>Salvar</button>
    </form>
  )
}

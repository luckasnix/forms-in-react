import { useState, Fragment } from 'react'

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
      {/* Elemento "input" controlado */}
      <div>
        <label htmlFor='name'>Insira o seu nome:</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          placeholder='João da Silva'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      {/* Elemento "select" controlado */}
      <div>
        <label htmlFor='gender'>Selecione o seu gênero:</label>
        <br />
        <select
          id='gender'
          name='gender'
          value={gender}
          onChange={(event) => setGender(event.target.value as GenderValue)}
        >
          <option value='' disabled>Seu gênero</option>
          {genders.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      {/* Elemento "radio" controlado */}
      <div>
        <label>Selecione o seu nível de escolaridade:</label>
        <br />
        {educationLevels.map(({ label, value }, index) => (
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

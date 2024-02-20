import { useState } from 'react'

import { SubmitButton } from '../../../../common/components/submit-button'
import { NameField } from './components/name-field'
import { GenderField } from './components/gender-field'
import { EducationLevelField } from './components/education-level-field'
import { AgreementField } from './components/agreement-field'
import type { GenderValue, EducationLevelValue } from './types'

import './styles.css'

export const SignupForm = () => {
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
      <h1>Cadastro</h1>
      <NameField name={name} setName={setName} />
      <GenderField gender={gender} setGender={setGender} />
      <EducationLevelField educationLevel={educationLevel} setEducationLevel={setEducationLevel} />
      <AgreementField wasAgreed={wasAgreed} setWasAgreed={setWasAgreed} />
      <SubmitButton label='Cadastrar' />
    </form>
  )
}

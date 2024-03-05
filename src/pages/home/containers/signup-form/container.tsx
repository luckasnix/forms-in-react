import * as stylex from '@stylexjs/stylex'
import { useSignupFormContext } from '@/contexts/signup-form'
import { SubmitButton } from '@/common/components/submit-button'

import { NameField } from './components/name-field'
import { GenderField } from './components/gender-field'
import { EducationLevelField } from './components/education-level-field'
import { AgreementField } from './components/agreement-field'

const styles = stylex.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '16px',
  },
})

export const SignupForm = () => {
  const { validateFields } = useSignupFormContext()

  return (
    <form
      {...stylex.props(styles.form)}
      onSubmit={(event) => {
        event.preventDefault()
        validateFields()
      }}
    >
      <h1>Cadastro</h1>
      <NameField />
      <GenderField />
      <EducationLevelField />
      <AgreementField />
      <SubmitButton label='Cadastrar' />
    </form>
  )
}

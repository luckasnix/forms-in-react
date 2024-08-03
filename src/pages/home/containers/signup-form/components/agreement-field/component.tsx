import { useStore } from '@tanstack/react-store'

import { signupFormStore, setWasAgreed } from '@/stores/signup-form'
import { Checkbox } from '@/common/components/checkbox'

export const AgreementField = () => {
  const { wasAgreed, wasAgreedErrors } = useStore(signupFormStore, (state) => ({
    wasAgreed: state.wasAgreed,
    wasAgreedErrors: state.wasAgreedErrors,
  }))

  return (
    <Checkbox
      name='agreement'
      label='Declaro que li e aceito os termos de uso e privacidade'
      value={wasAgreed}
      setValue={setWasAgreed}
      errors={wasAgreedErrors}
    />
  )
}

import { useStore } from '@tanstack/react-store'

import { signupFormStore, setWasAgreed } from '@/stores/signup-form'
import { Checkbox } from '@/common/components/checkbox'

export const AgreementField = () => {
  const wasAgreed = useStore(signupFormStore, (state) => state.wasAgreed)
  const wasAgreedErrors = useStore(signupFormStore, (state) => state.wasAgreedErrors)

  return (
    <Checkbox
      id='agreement'
      name='agreement'
      label='Declaro que li e aceito os termos de uso e privacidade'
      value={wasAgreed}
      setValue={setWasAgreed}
      errors={wasAgreedErrors}
    />
  )
}

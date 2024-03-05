import { useSignupFormContext } from '@/contexts/signup-form'
import { Checkbox } from '@/common/components/checkbox'

export const AgreementField = () => {
  const { signupFormState, signupFormDispatch } = useSignupFormContext()

  return (
    <Checkbox
      id='agreement'
      name='agreement'
      label='Declaro que li e aceito os termos de uso e privacidade'
      value={signupFormState.wasAgreed}
      setValue={(value: boolean) => {
        signupFormDispatch({ type: 'SET_WAS_AGREED', payload: value })
      }}
      errors={signupFormState.wasAgreedErrors}
    />
  )
}

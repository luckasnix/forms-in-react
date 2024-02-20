import { useSignupForm } from '../../../../../../stores/signup-form'
import { Checkbox } from '../../../../../../common/components/checkbox'

export const AgreementField = () => {
  const { wasAgreed, setWasAgreed } = useSignupForm((state) => state)

  return (
    <Checkbox
      id='agreement'
      name='agreement'
      label='Declaro que li e aceito os termos de uso e privacidade'
      value={wasAgreed}
      setValue={setWasAgreed} />
  )
}

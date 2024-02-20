import type { Dispatch, SetStateAction } from 'react'

import { Checkbox } from '../../../../../../common/components/checkbox'

type AgreementFieldProps = {
  wasAgreed: boolean
  setWasAgreed: Dispatch<SetStateAction<boolean>>
}

export const AgreementField = ({ wasAgreed, setWasAgreed }: AgreementFieldProps) => (
  <Checkbox
    id='agreement'
    name='agreement'
    label='Declaro que li e aceito os termos de uso e privacidade'
    value={wasAgreed}
    setValue={setWasAgreed}
  />
)

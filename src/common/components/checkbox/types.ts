import type { Dispatch, SetStateAction } from 'react'

export type CheckboxProps = {
  id: string
  name: string
  label: string
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
}

import type { Dispatch, SetStateAction } from 'react'

export type TextInputProps = {
  id: string
  name: string
  label: string
  placeholder: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

import type { Dispatch, SetStateAction } from 'react'

export type SelectProps<T extends string, U extends string> = {
  id: string
  name: string
  label: string
  value: T | ''
  setValue: Dispatch<SetStateAction<T | ''>>
  options: Array<{
    value: T
    label: U
  }>
  disabledOption: {
    value: ''
    label: string
  }
}

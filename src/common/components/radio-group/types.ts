import type { Dispatch, SetStateAction } from 'react'

export type RadioGroupProps<T extends string, U extends string> = {
  id: string
  name: string
  label: string
  value: T | ''
  setValue: Dispatch<SetStateAction<T | ''>>
  buttons: Array<{
    value: T
    label: U
  }>
}

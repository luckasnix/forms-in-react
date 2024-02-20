export type SelectProps<T extends string, U extends string> = {
  id: string
  name: string
  label: string
  value: T | ''
  setValue: (gender: T | '') => void
  options: Array<{
    value: T
    label: U
  }>
  disabledOption: {
    value: ''
    label: string
  }
}

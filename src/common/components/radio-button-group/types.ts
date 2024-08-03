export type RadioButtonGroupProps<T extends string, U extends string> = {
  name: string
  label: string
  value: T | ''
  setValue: (value: T | '') => void
  buttons: Array<{
    value: T
    label: U
  }>
  errors: Array<string>
}

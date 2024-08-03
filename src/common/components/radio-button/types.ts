export type RadioButtonProps<T extends string> = {
  name: string
  value: T | ''
  setValue: (value: T | '') => void
  buttonValue: string
  buttonLabel: string
}

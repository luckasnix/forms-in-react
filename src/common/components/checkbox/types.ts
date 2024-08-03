export type CheckboxProps = {
  name: string
  label: string
  value: boolean
  setValue: (value: boolean) => void
  errors: Array<string>
}

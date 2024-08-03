export type TextInputProps = {
  name: string
  label: string
  placeholder: string
  value: string
  setValue: (value: string) => void
  errors: Array<string>
}

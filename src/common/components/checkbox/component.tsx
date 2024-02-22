import type { CheckboxProps } from './types'

export const Checkbox = ({ id, name, label, value, setValue }: CheckboxProps) => (
  <div>
    <input
      type='checkbox'
      id={id}
      name={name}
      checked={value}
      onChange={(event) => {
        setValue(event.target.checked)
      }}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)

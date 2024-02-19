import type { TextInputProps} from './types'

export const TextInput = ({ id, name, label, placeholder, value, setValue }: TextInputProps) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <br />
    <input
      type='text'
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </div>
)

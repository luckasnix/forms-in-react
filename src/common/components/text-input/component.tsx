import * as stylex from '@stylexjs/stylex'

import type { TextInputProps } from './types'

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  errorMessage: {
    color: '#eb4034',
  },
})

export const TextInput = ({ id, name, label, placeholder, value, setValue, errors }: TextInputProps) => (
  <div {...stylex.props(styles.container)}>
    <label htmlFor={id}>{label}</label>
    <input
      type='text'
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
    />
    {errors.length > 0 && <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>}
  </div>
)

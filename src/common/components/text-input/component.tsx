import { useId } from 'react'
import * as stylex from '@stylexjs/stylex'

import type { TextInputProps } from './types'

const styles = stylex.create({
  errorMessage: {
    color: '#eb4034',
  },
})

export const TextInput = ({ name, label, placeholder, value, setValue, errors }: TextInputProps) => {
  const id = useId()

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }} />
      <br />
      {errors.length > 0 && (
        <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>
      )}
    </div>
  )
}

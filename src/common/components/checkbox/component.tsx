import { useId } from 'react'
import * as stylex from '@stylexjs/stylex'

import type { CheckboxProps } from './types'

const styles = stylex.create({
  errorMessage: {
    color: '#eb4034',
  },
})

export const Checkbox = ({ name, label, value, setValue, errors }: CheckboxProps) => {
  const id = useId()

  return (
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
      <br />
      {errors.length > 0 && (
        <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>
      )}
    </div>
  )
}

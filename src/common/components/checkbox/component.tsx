import * as stylex from '@stylexjs/stylex'

import type { CheckboxProps } from './types'

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

export const Checkbox = ({ id, name, label, value, setValue, errors }: CheckboxProps) => (
  <div {...stylex.props(styles.container)}>
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
    {errors.length > 0 && <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>}
  </div>
)

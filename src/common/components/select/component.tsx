import * as stylex from '@stylexjs/stylex'

import type { SelectProps } from './types'

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


export const Select = <T extends string, U extends string>({ id, name, label, value, setValue, options, disabledOption, errors }: SelectProps<T, U>) => (
  <div {...stylex.props(styles.container)}>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={(event) => {
        setValue(event.target.value as T)
      }}
    >
      <option value={disabledOption.value} disabled>{disabledOption.label}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
    {errors.length > 0 && <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>}
  </div>
)

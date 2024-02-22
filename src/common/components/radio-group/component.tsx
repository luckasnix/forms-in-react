import { Fragment } from 'react'
import * as stylex from '@stylexjs/stylex'

import type { RadioGroupProps } from './types'

const styles = stylex.create({
  errorMessage: {
    color: '#eb4034',
  },
})

export const RadioGroup = <T extends string, U extends string>({ id, name, label, value, setValue, buttons, errors }: RadioGroupProps<T, U>) => (
  <div>
    <label>{label}</label>
    <br />
    {buttons.map(({ value: buttonValue, label: buttonLabel }, index) => (
      <Fragment key={buttonValue}>
        <input
          type='radio'
          id={`${id}-${buttonValue}`}
          name={`${name}-${buttonValue}`}
          checked={value === buttonValue}
          value={buttonValue}
          onChange={(event) => {
            setValue(event.target.value as T)
          }} />
        <label htmlFor={`${id}-${buttonValue}`}>{buttonLabel}</label>
        {index !== buttons.length - 1 && <br />}
      </Fragment>
    ))}
    <br />
    {errors.length > 0 && <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>}
  </div>
)

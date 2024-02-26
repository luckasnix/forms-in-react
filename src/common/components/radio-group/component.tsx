import { Fragment } from 'react'
import * as stylex from '@stylexjs/stylex'

import type { RadioGroupProps } from './types'

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

export const RadioGroup = <T extends string, U extends string>({ id, name, label, value, setValue, buttons, errors }: RadioGroupProps<T, U>) => (
  <div {...stylex.props(styles.container)}>
    <label>{label}</label>
    <div>
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
    </div>
    {errors.length > 0 && <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>}
  </div>
)

import { Fragment } from 'react'

import type { RadioGroupProps } from './types'

export const RadioGroup = <T extends string, U extends string>({ id, name, label, value, setValue, buttons }: RadioGroupProps<T, U>) => (
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
  </div>
)

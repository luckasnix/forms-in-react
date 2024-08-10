import { useId } from 'react'

import type { RadioButtonProps } from './types'

export const RadioButton = <T extends string>({ name, value, setValue, buttonValue, buttonLabel }: RadioButtonProps<T>) => {
  const id = useId()

  return (
    <div>
      <input
        type='radio'
        id={id}
        name={`${name}-${buttonValue}`}
        checked={value === buttonValue}
        value={buttonValue}
        onChange={(event) => {
          setValue(event.target.value as T)
        }}
      />
      <label htmlFor={id}>{buttonLabel}</label>
    </div>
  )
}

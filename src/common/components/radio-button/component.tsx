import { useId } from 'react'
import * as stylex from '@stylexjs/stylex'

import type { RadioButtonProps } from './types'

const styles = stylex.create({
  container: {},
})

export const RadioButton = <T extends string>({ name, value, setValue, buttonValue, buttonLabel }: RadioButtonProps<T>) => {
  const id = useId()

  return (
    <div {...stylex.props(styles.container)}>
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

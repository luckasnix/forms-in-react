import { Fragment } from 'react'
import * as stylex from '@stylexjs/stylex'

import { RadioButton } from '@/common/components/radio-button'

import type { RadioButtonGroupProps } from './types'

const styles = stylex.create({
  errorMessage: {
    color: '#eb4034',
  },
})

export const RadioButtonGroup = <T extends string, U extends string>({
  name,
  label,
  value,
  setValue,
  buttons,
  errors,
}: RadioButtonGroupProps<T, U>) => (
  <div>
    <label>{label}</label>
    <br />
    {buttons.map(({ value: buttonValue, label: buttonLabel }) => (
      <Fragment key={buttonValue}>
        <RadioButton
          name={name}
          value={value}
          setValue={setValue}
          buttonValue={buttonValue}
          buttonLabel={buttonLabel}
        />
      </Fragment>
    ))}
    <br />
    {errors.length > 0 && (
      <small {...stylex.props(styles.errorMessage)}>{errors[0]}</small>
    )}
  </div>
)

import type { SelectProps } from './types'

export const Select = <T extends string, U extends string>({ id, name, label, value, setValue, options, disabledOption }: SelectProps<T, U>) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <br />
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
  </div>
)

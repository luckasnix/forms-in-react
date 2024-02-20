export type GenderLabel = 'Feminino' | 'Masculino'

export type GenderValue = 'female' | 'male'

export type Gender = {
  value: GenderValue
  label: GenderLabel
}

export type EducationLevelLabel = 'Ensino Fundamental' | 'Ensino Médio' | 'Ensino Superior'

export type EducationLevelValue = 'primary' | 'secondary' | 'tertiary'

export type EducationLevel = {
  value: EducationLevelValue
  label: EducationLevelLabel
}

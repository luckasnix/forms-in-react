export type GenderLabel = 'Feminino' | 'Masculino'

export type GenderValue = 'female' | 'male'

export type Gender = {
  label: GenderLabel
  value: GenderValue
}

export type EducationLevelLabel = 'Ensino Fundamental' | 'Ensino Médio' | 'Ensino Superior'

export type EducationLevelValue = 'primary' | 'secondary' | 'tertiary'

export type EducationLevel = {
  label: EducationLevelLabel
  value: EducationLevelValue
}

export interface ChatTimeType {
  label: string
  value: number
}

export interface PartnerSnsType {
  id: number
  type: string
  snsUrl: string
}

export interface PartnerCareerType {
  title: string
  startDate: string
  finishDate: string | null
  description: string
}

export interface PartnerCareerFetchType extends PartnerCareerType {
  careerId: number
}

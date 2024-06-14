export interface RequestType {
  title: string
  description: string
  situation: string
  referenceImages: string[] | undefined
  myImages: string[] | undefined
  budget: number
  brand: string[] | undefined
  category: string[]
  otherRequirements: string | undefined
}

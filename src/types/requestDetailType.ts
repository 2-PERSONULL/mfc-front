export interface RequestDetailProps {
  requestId: string
  userId: string
  title: string
  description: string
  situation: string
  budget: string
  otherRequirements: string
  createdDate: Date
  userImageUrl: string
  userNickName: string
  userGender: number
  userAge: number
  partner: [
    {
      partnerId: string
      status: string
      deadline: Date
      confirmedPrice: string
    },
  ]
  brandIds: string[]
  categoryIds: string[]
  referenceImageUrls: string[]
  myImageUrls: string[]
}

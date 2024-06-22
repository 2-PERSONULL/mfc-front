export interface RequestType {
  title: string
  description: string
  situation: string
  referenceImageUrls: string[] | undefined
  myImageUrls: string[] | undefined
  budget: number
  brandIds: string[] | undefined
  categoryIds: string[]
}

export interface PartnerChatListType {
  requestId: string
  userId: string
  userImageUrl: string
  userNickName: string
  userGender: number
  userAge: number
  title: string
  createdDate: string
  partnerId: string
  status: string
  deadline: string
}

export interface UserRequestDetailType {
  requestId: number
  userId: string
  title: string
  description: string
  situation: string
  budget: number
  createdDate: string
  userImageUrl: string
  userNickName: string
  userGender: number
  userAge: number
  brandIds: string[]
  categoryIds: string[]
  referenceImageUrls: string[]
  myImageUrls: string[]
}

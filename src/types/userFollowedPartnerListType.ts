export interface FollwedListType {
  partners: UserFollowedPartnerListType[]
  last: boolean
}

export interface UserFollowedPartnerListType {
  partnerId: string
  nickname: string
  profileImage: string
  imageAlt: string
}

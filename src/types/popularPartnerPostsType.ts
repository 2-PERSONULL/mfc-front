export interface PopularPartnerPostsType {
  postId: number
  partnerId: string
  profileImage: string
  profileAlt: string
  nickname: string
  imageUrl: string
  imageAlt: string
  tags: [
    {
      tagId: number
      value: string
    },
  ]
}

export interface PartnerPostsByCategoryType {
  posts: [
    {
      partnerId: string
      postId: number
      imageUrl: string
      alt: string
    },
  ]
  last: boolean
}

export interface PartnerPostListType {
  partnerId: string
  postId: number
  imageUrl: string
  alt: string
}

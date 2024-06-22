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

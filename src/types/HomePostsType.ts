export interface HomePostsType {
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

export interface RecommendPostType {
  postId: number
  partnerId: string
  profileImage: string
  profileAlt: string
  nickname: string
  imageUrl: string
  imageAlt: string
  tags: Array<{
    tagId: number
    value: string
  }>
}

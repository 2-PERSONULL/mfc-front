export interface MemberStyleType {
  styleId: number
  name: string
  imageUrl: string
  alt: string
}

export interface MemberFavoriteStyleType {
  favoriteId: number | null
  styleId: number | null
  name: string | null
}

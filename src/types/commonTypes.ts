export interface MemberStyleType {
  styleId: number
  name: string
  imageUrl: string
  alt: string
}

export interface MemberFavoriteStyleType {
  favoriteId: number
  styleId: number
  name: string
}

export interface RankingType {
  partnerId: string
  nickname: string
  profileImage: string
  alt: string
  followerCnt: number
  coordinateCnt: number
  averageStar: number
  styles: MemberFavoriteStyleType[]
}

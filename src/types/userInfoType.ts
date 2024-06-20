export interface UserStyleType {
  favoriteStyles: {
    favoriteId: number | null
    styleId: number | null
    name: string | null
  }[]
}

export interface UserBodyInfoType {
  height: number | null
  weight: number | null
  bodyType: string | null
}

export interface UserClothesSizeInfoType {
  topSize: string | null
  bottomSize: string | null
  shoeSize: number | null
}

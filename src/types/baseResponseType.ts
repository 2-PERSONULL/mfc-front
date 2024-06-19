export interface BaseResponseType {
  httpStatus: string
  isSuccess: boolean
  message: string
  code: number
  result: string[] | object[] | number[] | null
}

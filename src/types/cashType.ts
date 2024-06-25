export interface CashHistoryType {
  id: number
  dateTime: string
  type: string
  amount: number
  description: string
}

export interface CashChargeHistoryType {
  amount: number
  paymentStatus: string
  paymentDate: string
}

export interface PaymentHistoryType {
  id: number
  userUuid: string
  partnerUuid: string
  amount: number
  status: string
  createdAt: string
}

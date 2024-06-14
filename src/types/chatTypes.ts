export interface MessageType {
  id: string
  roomId: string
  type: string
  msg: string
  sender: string
  receiver: string
  createdAt: string
}

export interface CardDetailType {
  subtitle: string
  value: string
}

export interface CardActionType {
  label: string
  action: string
  url: string
}

export interface CardMessageType {
  requestId: string
  title: string
  description: string
  details: CardDetailType[]
  actions: CardActionType[]
  target: string
}

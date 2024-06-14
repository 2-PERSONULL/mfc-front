import * as PortOne from '@portone/browser-sdk/v2'
import { v4 } from 'uuid'

const requestPayment = async (amount: number) => {
  await PortOne.requestPayment({
    isTestChannel: true,
    storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
    channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
    paymentId: `payment${v4()}`,
    orderName: '코디네이팅',
    totalAmount: amount,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
    redirectUrl: `${process.env.NEXTAUTH_URL}/payment/confirm?value=${amount}`,
    customer: {
      fullName: '홍길동',
      //   phoneNumber: '010-0000-1234',
      //   email: 'test@portone.io',
    },
  })
}

export default requestPayment

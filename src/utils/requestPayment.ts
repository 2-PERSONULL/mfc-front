import * as PortOne from '@portone/browser-sdk/v2'
import { v4 } from 'uuid'
import checkPayment from '@/actions/user/Payments'

const requestPayment = async ({
  amount,
  payMethod,
}: {
  amount: number
  payMethod: string
}) => {
  if (payMethod === 'CARD') {
    const response = await PortOne.requestPayment({
      isTestChannel: true,
      storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
      channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
      paymentId: `payment${v4().slice(0, 10)}`,
      orderName: '코디네이팅',
      totalAmount: amount,
      currency: 'CURRENCY_KRW',
      payMethod: 'CARD',
      redirectUrl: `${process.env.NEXTAUTH_URL}/payment/confirm?value=${amount}`,
      windowType: {
        pc: 'IFRAME',
        mobile: 'REDIRECTION',
      },
      customer: {
        fullName: '홍길동',
        phoneNumber: '010-0000-1234',
        email: 'pdg03092@gmail.com',
      },
    })
    if (!response || response.code != null) {
      console.log(response?.message)
      return alert('결제 요청에 실패했습니다.')
    }
    const validation = await checkPayment(amount, response?.paymentId ?? '')
    if (validation === 200) {
      alert('결제가 완료되었습니다.')
      // showToast({ content: '결제가 완료되었습니다.', type: 'success' })
    }

    // showToast({ content: '결제에 실패했습니다.', type: 'error' })
  }
  if (payMethod === 'NAVERPAY') {
    return PortOne.requestPayment({
      isTestChannel: true,
      storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
      channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
      paymentId: `payment${v4()}`,
      orderName: '코디네이팅',
      totalAmount: amount,
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
      easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_NAVERPAY' },
      redirectUrl: `${process.env.NEXTAUTH_URL}/payment/confirm?value=${amount}`,
      windowType: {
        pc: 'IFRAME',
        mobile: 'REDIRECTION',
      },
      customer: {
        fullName: '홍길동',
        //   phoneNumber: '010-0000-1234',
        //   email: '
      },
    })
  }
  if (payMethod === 'KAKAOPAY') {
    return PortOne.requestPayment({
      isTestChannel: true,
      storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
      channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
      paymentId: `payment${v4()}`,
      orderName: '코디네이팅',
      totalAmount: amount,
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
      easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_KAKAOPAY' },
      redirectUrl: `${process.env.NEXTAUTH_URL}/payment/confirm?value=${amount}`,
      windowType: {
        pc: 'IFRAME',
        mobile: 'REDIRECTION',
      },
      customer: {
        fullName: '홍길동',
        //   phoneNumber: '010-0000-1234',
        //   email: '
      },
    })
  }
  if (payMethod === 'TOSSPAY') {
    return PortOne.requestPayment({
      isTestChannel: true,
      storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
      channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
      paymentId: `payment${v4()}`,
      orderName: '코디네이팅',
      totalAmount: amount,
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
      easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_TOSSPAY' },
      redirectUrl: `${process.env.NEXTAUTH_URL}/payment/confirm?value=${amount}`,
      windowType: {
        pc: 'IFRAME',
        mobile: 'REDIRECTION',
      },
      customer: {
        fullName: '홍길동',
        //   phoneNumber: '010-0000-1234',
        //   email: '
      },
    })
  }
}

export default requestPayment

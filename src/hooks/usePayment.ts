import * as PortOne from '@portone/browser-sdk/v2'
import { v4 } from 'uuid'
import { checkPayment } from '@/actions/user/Payments'
import useToast from '@/stores/toast'

const usePayment = () => {
  const { showToast } = useToast()

  const requestPayment = async (
    amount: number,
    payMethod: string,
    closeModal: () => void,
    callbackUrl?: string,
  ) => {
    const paymentId = v4()
    const encodedCallbackUrl = encodeURIComponent(callbackUrl || '')

    if (payMethod === 'CARD') {
      const response = await PortOne.requestPayment({
        isTestChannel: true,
        storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
        channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
        paymentId,
        orderName: 'MFC 캐시충전',
        totalAmount: amount,
        currency: 'CURRENCY_KRW',
        payMethod: 'CARD',
        redirectUrl: `${process.env.NEXTAUTH_URL}/user/payment/confirm?value=${amount}&callback=${encodedCallbackUrl}`,
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

      // pc 처리 로직
      if (!response || response.code != null) {
        showToast({ content: '결제에 실패했습니다.', type: 'error' })
        return
      }
      const validation = await checkPayment(amount, response?.paymentId ?? '')
      if (validation === 200) {
        showToast({ content: '결제가 완료되었습니다.', type: 'success' })

        closeModal()

        return
      }
      showToast({ content: '결제에 실패했습니다.', type: 'error' })
      return
    }
    if (payMethod === 'NAVERPAY') {
      const response = await PortOne.requestPayment({
        isTestChannel: true,
        storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
        channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
        paymentId,
        orderName: 'MFC 캐시충전',
        totalAmount: amount,
        currency: 'CURRENCY_KRW',
        payMethod: 'EASY_PAY',
        easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_NAVERPAY' },
        redirectUrl: `${process.env.NEXTAUTH_URL}/user/payment/confirm?value=${amount}&callback=${encodedCallbackUrl}`,
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
        showToast({ content: '결제에 실패했습니다.', type: 'error' })
        return
      }
      const validation = await checkPayment(amount, response?.paymentId ?? '')
      if (validation === 200) {
        showToast({ content: '결제가 완료되었습니다.', type: 'success' })
        closeModal()
        return
      }
      showToast({ content: '결제에 실패했습니다.', type: 'error' })
      return
    }
    if (payMethod === 'KAKAOPAY') {
      const response = await PortOne.requestPayment({
        isTestChannel: true,
        storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
        channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
        paymentId,
        orderName: 'MFC 캐시충전',
        totalAmount: amount,
        currency: 'CURRENCY_KRW',
        payMethod: 'EASY_PAY',
        easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_KAKAOPAY' },
        redirectUrl: `${process.env.NEXTAUTH_URL}/user/payment/confirm?value=${amount}&callback=${encodedCallbackUrl}`,
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
        showToast({ content: '결제에 실패했습니다.', type: 'error' })
        return
      }
      const validation = await checkPayment(amount, response?.paymentId ?? '')
      if (validation === 200) {
        showToast({ content: '결제가 완료되었습니다.', type: 'success' })
        closeModal()
        return
      }
      showToast({ content: '결제에 실패했습니다.', type: 'error' })
      return
    }
    if (payMethod === 'TOSSPAY') {
      const response = await PortOne.requestPayment({
        isTestChannel: true,
        storeId: 'store-3817e375-0dc1-428b-b5b8-e3c33c8ae5b2',
        channelKey: 'channel-key-f93be768-c800-46d6-b9f7-ef59d3ac5dda',
        paymentId,
        orderName: 'MFC 캐시충전',
        totalAmount: amount,
        currency: 'CURRENCY_KRW',
        payMethod: 'EASY_PAY',
        easyPay: { easyPayProvider: 'EASY_PAY_PROVIDER_TOSSPAY' },
        redirectUrl: `${process.env.NEXTAUTH_URL}/user/payment/confirm?value=${amount}&callback=${encodedCallbackUrl}`,
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
        showToast({ content: '결제에 실패했습니다.', type: 'error' })
        return
      }
      const validation = await checkPayment(amount, response?.paymentId ?? '')
      if (validation === 200) {
        showToast({ content: '결제가 완료되었습니다.', type: 'success' })
        closeModal()
        return
      }
      showToast({ content: '결제에 실패했습니다.', type: 'error' })
    }
  }

  return { requestPayment }
}

export default usePayment

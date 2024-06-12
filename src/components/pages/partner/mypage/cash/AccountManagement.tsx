'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon'
import FormLabel from '@/components/ui/input/FormLabel'
import BankList from '@/components/pages/partner/mypage/cash/BankList'
import useToast from '@/stores/toast'
import { getAccountRealName, saveAccountInfo } from '@/app/api/partner/Account'
import LoadingModal from '@/components/common/LoadingModal'
import BottomFixedSubmitButton from '@/components/ui/button/BottomFixedSubmitButton'

interface BankType {
  code: string
  name: string
}

export default function AccountManagement({
  bankList,
}: {
  bankList: BankType[]
}) {
  // 파트너 본인의 이름을 서버에서 받아옵니다
  const router = useRouter()
  const name = '서여진'
  const { showToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBank, setSelectedBank] = useState<BankType | null>(null)
  const [bankAccount, setBankAccount] = useState<string>('')

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!selectedBank) {
      showToast({
        content: '은행을 선택해주세요',
        type: 'warning',
      })
      return
    }
    if (!bankAccount) {
      showToast({
        content: '계좌번호를 입력해주세요',
        type: 'warning',
      })
      return
    }

    setLoading(true)
    const result = await getAccountRealName(bankAccount, selectedBank.code)
    setLoading(false)

    if (result.code === 0) {
      const holder = result.response.bank_holder
      if (holder === name) {
        // 파트너 정산 계좌 정보 저장 API 호출
        const res = await saveAccountInfo(bankAccount, selectedBank.code)
        if (res.isSuccess) {
          showToast({
            content: '저장되었습니다',
            type: 'success',
          })
          router.replace('/partner/mypage/cash')
          return
        }

        showToast({
          content: '서버에 오류가 발생했습니다.',
          type: 'warning',
        })
        return
      }
    }
    showToast({
      content: '예금주, 은행, 계좌번호가 일치하지 않습니다',
      type: 'warning',
    })
  }

  return (
    <>
      {loading && <LoadingModal message="잠시만 기다려주세요" />}
      <BankList
        bankList={bankList}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedBank={setSelectedBank}
      />
      <div className="p-4">
        <p className="text-[15px] mb-5">입력한 정보로 환전금액이 입금됩니다.</p>

        <form onSubmit={submitHandler} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="예금주" />
            <input
              readOnly
              value={name}
              className="border border-gray-300 bg-gray-100 rounded-[4px] py-2 px-2 w-full h-[45px] text-[14px] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="은행명" required />
            <div className="relative w-full">
              <div
                role="presentation"
                onClick={() => setIsModalOpen(true)}
                className="border border-gray-300 rounded-[4px] w-full h-[45px] relative flex items-center justify-between px-2 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              >
                <span className="text-[#222] text-[14px]">
                  {selectedBank?.name ?? '은행을 선택하세요'}
                </span>
                <RightArrowIcon
                  width={10}
                  height={10}
                  rotate="90"
                  color="gray"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="계좌번호" required />
            <input
              type="number"
              pattern="\d*"
              placeholder="입금받으실 계좌번호를 입력해주세요"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className="border border-gray-300 rounded-[4px] py-2 px-2 w-full h-[45px] text-[14px] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <BottomFixedSubmitButton text="저장" />
        </form>
      </div>
    </>
  )
}

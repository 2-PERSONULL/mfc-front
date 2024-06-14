'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Modal from '@/components/common/Modal'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import PartnerSnsTag from '@/components/pages/partner/mypage/profile/PartnerSnsTag'
import SnsSelectBox from '@/components/ui/dropdown/SnsSelectBox'
import { PartnerSnsType } from '@/types/partnerProfileTypes'
import useToast from '@/stores/toast'
import { updateSnsData } from '@/actions/partner/PartnerProfileUpdate'

export default function PartnerSns({ snsList }: { snsList: PartnerSnsType[] }) {
  const { showToast } = useToast()
  const [data, setData] = useState<PartnerSnsType[]>(snsList)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const initialData = {
    id: 0,
    type: 'instagram',
    snsUrl: '',
  }

  const addHandler = () => {
    initialData.id = data.length + 1
    setData([...data, initialData])
  }

  const changeHandler = (id: number, value: string) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, type: value } : item,
    )
    setData(newData)
  }

  const changeUrlHandler = (id: number, value: string) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, snsUrl: value } : item,
    )
    setData(newData)
  }

  const deleteHandler = (id: number) => {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }

  const saveHandler = () => {
    updateSnsData(data)
    setIsModalOpen(false)
    showToast({ content: '저장되었습니다.', type: 'success' })
  }

  const editHandler = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      {isModalOpen && (
        <Modal title="SNS 설정" closeModal={() => setIsModalOpen(false)}>
          <form className="m-5" action={saveHandler}>
            <h1 className="font-semibold">최대 3개까지 등록이 가능합니다.</h1>
            <ul className="mt-10">
              {data.map((sns) => (
                <li key={sns.id} className="flex items-center gap-2 mb-5">
                  <SnsSelectBox
                    selectedOption={sns}
                    setSelectedOption={changeHandler}
                  />
                  <input
                    className="rounded-[4px] border border-gray-200 w-full h-[40px] px-[10px] text-[14px]"
                    placeholder="https://"
                    type="url"
                    value={sns.snsUrl}
                    required
                    onChange={(e) => changeUrlHandler(sns.id, e.target.value)}
                  />
                  <button type="button" onClick={() => deleteHandler(sns.id)}>
                    <Image
                      src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/delete-icon.svg"
                      alt="edit icon"
                      width={32}
                      height={32}
                    />
                  </button>
                </li>
              ))}
            </ul>
            {data.length < 3 && (
              <button
                onClick={addHandler}
                type="button"
                className="w-[60px] h-[40px] mt-5 bg-[#ececec] text-[#222] text-[14px] font-semibold rounded-[4px]"
              >
                추가
              </button>
            )}
            <div className="fixed bottom-7 w-full left-0 right-0 px-6">
              <button
                type="submit"
                className="btn btn-neutral rounded-full w-full bg-black h-[50px]"
              >
                <span className="text-white">저장</span>
              </button>
            </div>
          </form>
        </Modal>
      )}
      <PartnerProfileTitleAndEdit
        title="SNS"
        clickHandler={editHandler}
        isEmpty={!snsList}
        content={
          <div>
            <ul className="flex flex-wrap w-full h-auto">
              {snsList.map((sns) => (
                <li key={sns.id}>
                  <PartnerSnsTag sns={sns} />
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  )
}

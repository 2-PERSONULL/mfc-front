'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { actionCoordinate } from '@/actions/partner/PartnerRequest'
import { UserRequestDetailType } from '@/types/requestType'
import useToast from '@/stores/toast'
import RequestInformation from '@/components/pages/partner/reqCoordi/RequestInformation'
import RequestUserInformation from '@/components/pages/partner/reqCoordi/userInfo/RequestUserInformation'
import UserRequestImageList from '@/components/pages/partner/reqCoordi/userInfo/UserRequestImageList'
import { UserBodyInfoType, UserClothesSizeInfoType } from '@/types/userInfoType'
import { MemberFavoriteStyleType } from '@/types/commonTypes'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Step {
  title: string
  content: JSX.Element
}

export default function RequestDetail({
  historyId,
  requestDetail,
  favoritStyle,
  sizeInformation,
  bodyType,
}: {
  historyId: string
  requestDetail: UserRequestDetailType
  favoritStyle: MemberFavoriteStyleType[]
  sizeInformation: UserClothesSizeInfoType
  bodyType: UserBodyInfoType
}) {
  const status = useSearchParams().get('status')
  const router = useRouter()
  const [selectedStep, setSelectedStep] = React.useState(0)
  const { showToast } = useToast()
  const [swiper, setSwiper] = useState<SwiperCore>()

  const steps: Step[] = [
    {
      title: '요청서 상세',
      content: <RequestInformation requestDetail={requestDetail} />,
    },
    {
      title: '요청자 정보',
      content: (
        <RequestUserInformation
          favoritStyle={favoritStyle}
          sizeInformation={sizeInformation}
          bodyType={bodyType}
        />
      ),
    },
    {
      title: '참고 이미지',
      content: (
        <UserRequestImageList
          myImageList={requestDetail.myImageUrls}
          referImageList={requestDetail.referenceImageUrls}
        />
      ),
    },
  ]

  const actionHandler = async (action: string) => {
    const result = await actionCoordinate(historyId, action)

    if (result.isSuccess) {
      showToast({
        content: `요청을 ${action === 'RESPONSEREJECT' ? '거절' : '수락'}했습니다.`,
        type: 'success',
      })
      router.push('/partner/chats')
      return
    }

    showToast({ content: result.message, type: 'warning' })
  }

  const handleNavClick = (index: number) => {
    setSelectedStep(index)
    swiper?.slideTo(index, 500)
  }

  return (
    <div className="w-[100vw]">
      <div>
        <section className="fixed z-10 top-[50px] bg-white w-full flex flex-col gap-6 p-5">
          <div className="flex items-center gap-2 pb-3 border-b border-b-gray-200">
            <Image
              src="/icons/contract.svg"
              alt="icon"
              width={60}
              height={60}
            />
            <div>
              <p className="font-semibold text-[18px] text-gray-600">
                코디 요청서가 도착했어요!
              </p>
              <span className="text-[15px] text-gray-500">
                상세 내용을 확인하고 응답해주세요:)
              </span>
            </div>
          </div>

          <nav>
            <ul className="flex gap-3 text-[14px]">
              {steps.map((step, index) => (
                <li
                  key={index}
                  role="presentation"
                  className={`px-3 py-2 cursor-pointer ${
                    selectedStep === index
                      ? 'border-b-[3px] border-b-black'
                      : ''
                  }`}
                  onClick={() => handleNavClick(index)}
                >
                  {step.title}
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="px-6 mt-[190px] mb-[100px]">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            allowTouchMove={false}
            onSwiper={setSwiper}
            onSlideChange={(s) => setSelectedStep(s.activeIndex)}
          >
            <div className="max-h-[70vh] px-6 mt-[180px] overflow-hidden overflow-y-scroll no-scrollbar">
              {steps.map((step: Step, index) => (
                <SwiperSlide key={index}>{step.content}</SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
      </div>

      {status === 'nonresponse' && (
        <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-gradient-to-t from-white gap-2 px-2 pb-[10px] z-10">
          <button
            type="button"
            onClick={() => actionHandler('RESPONSEREJECT')}
            className="bg-gray-200 font-semibold text-[17px] h-[60px] rounded-full w-full"
          >
            거절
          </button>
          <button
            type="button"
            onClick={() => actionHandler('RESPONSEACCEPT')}
            className="bg-black font-semibold text-white text-[17px] h-[60px] rounded-full w-full"
          >
            수락
          </button>
        </div>
      )}
    </div>
  )
}

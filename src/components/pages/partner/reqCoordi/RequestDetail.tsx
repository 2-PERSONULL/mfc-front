'use client'

import React from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'
import { actionCoordinate } from '@/actions/partner/PartnerRequest'
// import { UserRequestDetailType } from '@/types/requestType'
import useToast from '@/stores/toast'
// import RequestInformation from './RequestInformation'
// import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import RequestDetailForm from './RequestDetailForm'

// interface Step {
//   title: string
//   content: JSX.Element
// }

export default function RequestDetail({
  historyId,
}: {
  historyId: string
  // requestDetail: UserRequestDetailType
}) {
  const status = useSearchParams().get('status')
  const router = useRouter()
  // const [selectedStep, setSelectedStep] = React.useState(0)
  // const [animation, setAnimation] = useState('')
  const { showToast } = useToast()
  SwiperCore.use([Pagination])
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // const steps: Step[] = [
  //   {
  //     title: '요청서 상세',
  //     content: <RequestInformation requestDetail={requestDetail} />,
  //   },
  //   {
  //     title: '참고 이미지',
  //     content: <p>참고 이미지라궁</p>,
  //   },
  //   {
  //     title: '요청자 정보',
  //     content: <p>요청자 정보라궁</p>,
  //   },
  // ]

  const actionHandler = async (action: string) => {
    const result = await actionCoordinate(historyId, action)

    if (result.isSuccess) {
      showToast({ content: '요청을 수락했습니다.', type: 'success' })
      router.push('/partner/chats')
      return
    }

    showToast({ content: result.message, type: 'warning' })
  }

  // const handleSlideChange = (swiper: any) => {
  //   setCurrentSlideIndex(swiper.activeIndex)
  // }

  // const handleNavClick = (index: number) => {
  //   if (index > selectedStep) {
  //     setAnimation('animate-slideInRight')
  //   } else if (index < selectedStep) {
  //     setAnimation('animate-slideInLeft')
  //   }
  //   setTimeout(() => {
  //     setSelectedStep(index)
  //     setAnimation('')
  //   }, 500) // Animation duration
  // }

  return (
    <div className="w-full">
      <section className="relative grid gap-6 w-full min-h-screen p-5 pb-[140px]">
        <div className="flex items-center gap-2 pb-3 border-b border-b-gray-200">
          <Image src="/icons/contract.svg" alt="icon" width={60} height={60} />
          <div>
            <p className="font-semibold text-[18px] text-gray-600">
              코디 요청서가 도착했어요!
            </p>
            <span className="text-[15px] text-gray-500">
              상세 내용을 확인하고 응답해주세요:)
            </span>
          </div>
        </div>
        {/* 
        <nav>
          <ul className="flex gap-3 text-[14px]">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`border border-gray-400 rounded-3xl px-3 py-1 cursor-pointer ${
                  selectedStep === index ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleNavClick(index)}
              >
                {step.title}
              </li>
            ))}
          </ul>
        </nav> */}

        {/* <div className="h-[373px] ">
          <Swiper
            className="mySwiper"
            spaceBetween={30} // 슬라이스 사이 간격
            slidesPerView={1} // 보여질 슬라이스 수
            onSlideChange={handleSlideChange}
            initialSlide={currentSlideIndex}
          >
            {steps.map((step: Step, index) => (
              <SwiperSlide key={index}>{step.content}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`h-[400px] ${animation}`}>
          {steps[selectedStep].content}
        </div> */}

        {/* <div className="flex flex-col gap-8">
          <RequestDetailForm
            title="코디 제출 기한"
            value={formatRequestDate(requestDetail.partner.deadline)}
          />
          <RequestDetailForm
            title="코디 상황"
            value={requestDetail.situation}
          />
          <RequestDetailForm
            title="요청 내용"
            value={requestDetail.description}
          />
          <RequestDetailForm title="코디 옵션" value="원피스" />
          <RequestDetailForm
            title="선호 브랜드"
            value={
              requestDetail.brandIds.length > 0
                ? requestDetail.brandIds.join(', ')
                : '선호 브랜드가 없습니다.'
            }
          />
          <RequestDetailForm
            title="코디 예산"
            value={`${parseInt(requestDetail.budget, 10).toLocaleString()}원`}
          />
        </div> */}
      </section>

      {status === 'nonresponse' && (
        <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-gradient-to-t from-white gap-2 px-2 pb-[10px]">
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

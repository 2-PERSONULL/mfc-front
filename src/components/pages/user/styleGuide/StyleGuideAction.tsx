import React from 'react'
import useToast from '@/stores/toast'
import confirmTrade from '@/actions/user/Trade'

export default function StyleGuideAction({ requestId }: { requestId: string }) {
  const { showToast } = useToast()

  const confirmHandler = async () => {
    const data = await confirmTrade(requestId)
    if (data.isSuccess) {
      showToast({ content: '코디를 확정했습니다.', type: 'success' })
    }
  }

  return (
    <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-gradient-to-t from-white gap-2 px-2 pb-[10px] z-10">
      <button
        type="button"
        onClick={confirmHandler}
        className="bg-black font-semibold text-white text-[17px] h-[60px] rounded-full w-full"
      >
        확정하기
      </button>
    </div>
  )
}

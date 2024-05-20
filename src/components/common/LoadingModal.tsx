import React from 'react'

const LoadingModal = ({ message }: { message?: string }) => {
  return (
    <div className="fixed z-[200] top-0 left-0 w-full h-full bg-[#424242] bg-opacity-60">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="loading loading-dots loading-lg bg-white" />
        {message && <p className="text-white text-[14px] mt-2">{message}</p>}
      </div>
    </div>
  )
}

LoadingModal.defaultProps = {
  message: '',
}

export default LoadingModal

import React from 'react'
import Image from 'next/image'

export default function Step({
  steps,
  currentStep,
}: {
  steps: string[]
  currentStep: number
}) {
  return (
    <div className="flex justify-between w-full">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={`flex-auto border-t-2 ${index + 1 <= currentStep ? 'border-t-gray-500' : 'border-t-gray-300'} mt-3`}
            />
          )}

          <div className="flex items-center justify-center flex-col relative">
            {index + 1 <= currentStep ? (
              <Image
                src="/icons/complete-top.svg"
                alt="icon"
                width={30}
                height={30}
                className="z-5"
              />
            ) : (
              <Image
                src="/icons/before-top.svg"
                alt="icon"
                width={30}
                height={30}
                className="z-5"
              />
            )}

            <div
              className={`text-[12px] mt-1 ${index + 1 === currentStep ? 'font-bold' : ''}`}
            >
              {step}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

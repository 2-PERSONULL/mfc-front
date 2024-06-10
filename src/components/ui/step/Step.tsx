import React from 'react'
import './style.css'

export default function Step({
  steps,
  currentStep,
}: {
  steps: string[]
  currentStep: number
}) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center px-2">
            <div
              className={`flex items-center justify-center w-4 h-4 rounded-full ${index + 1 <= currentStep ? 'bg-[#000000]' : 'bg-gray-300'}  text-white`}
            />

            <div className="text-center text-xs mt-1">{step}</div>
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`flex-auto border-t-2  ${index + 1 < currentStep ? 'border-[#616161]' : 'border-gray-300'} `}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

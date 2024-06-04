import React from 'react'

export default function Step() {
  const steps = [
    {
      id: 1,
      title: '요청',
    },
    {
      id: 2,
      title: '거래대기',
    },
    {
      id: 3,
      title: '거래확정',
    },
    {
      id: 4,
      title: '코디완료',
    },
  ]

  // const currentStep = 2

  return (
    <div className="flex items-center justify-center gap-1">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 dark:bg-gray-700 dark:text-gray-400">
              1
            </div>
            <span className="text-sm font-medium">{step.title}</span>
          </div>
          {index !== steps.length - 1 && (
            <div className="h-1 w-12 bg-gray-200 dark:bg-gray-700" />
          )}
        </div>
      ))}
    </div>
    // <ul className="flex justify-stretch items-center">
    //   {steps.map((step, index) => (
    //     <li key={step.id} className="flex-1 flex flex-col">
    //       <div className="relative flex items-center  w-full">
    //         <div
    //           className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${currentStep >= step.id ? 'bg-black' : 'bg-gray-400'}`}
    //         />
    //         {index !== steps.length - 1 && (
    //           <div
    //             className={`absolute left-1/2 transform -translate-x-1/2 w-full h-1 ${currentStep > step.id ? 'bg-black' : 'bg-gray-400'}`}
    //           />
    //         )}
    //       </div>
    //       <h3 className="mt-2">{step.title}</h3>
    //     </li>
    //   ))}
    // </ul>
  )
}

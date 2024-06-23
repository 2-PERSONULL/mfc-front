import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import StyleGuideInfo from '@/types/styleGuideTypes'

interface StyleGuideTabsProps {
  guideList: StyleGuideInfo[]
  setGuideList: (guides: StyleGuideInfo[]) => void
  tabs: number[]
  setTabs: (tabs: number[]) => void
  active: number
  setActive: (index: number) => void
}

export default function StyleGuideTabs({
  guideList,
  setGuideList,
  tabs,
  setTabs,
  active,
  setActive,
}: StyleGuideTabsProps) {
  const tabsContainerRef = useRef<HTMLUListElement>(null)

  const handleAddTab = () => {
    const newTabIndex = tabs.length
    setTabs([...tabs, newTabIndex])
    setGuideList([
      ...guideList,
      {
        category: '상의',
        brand: '',
        budget: 0,
        url: '',
        comment: '',
        images: [],
      },
    ])
    setActive(newTabIndex)
  }

  const handleRemoveTab = (index: number) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter((tab) => tab !== index)
      setTabs(newTabs)
      const newGuideList = guideList.filter((_, i) => i !== index)
      setGuideList(newGuideList)
      setActive(newTabs.length - 1)
    }
  }

  useEffect(() => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollLeft = tabsContainerRef.current.scrollWidth
    }
  }, [tabs])

  return (
    <div className="flex h-[60px] bg-[#ececec] z-[100]">
      <ul
        ref={tabsContainerRef}
        className="flex h-full flex-nowrap items-end overflow-x-auto no-scrollbar"
      >
        {tabs.map((tab, index) => (
          <li key={index}>
            <div
              role="presentation"
              onClick={() => setActive(index)}
              className={`pt-2 px-3 flex h-[40px] ${tab === tabs.length - 1 ? 'min-w-[105px]' : 'min-w-[95px]'} items-center rounded-t-[14px] ${active === tab ? 'bg-white' : ''}`}
            >
              <Image
                src="/icons/hanger.svg"
                alt="hanger"
                width={21}
                height={21}
                className="mr-1"
              />
              <span className="mr-1 font-semibold">Item{tab + 1}</span>
              {tab === tabs.length - 1 && tab !== 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveTab(index)
                  }}
                >
                  <span className="font-bold text-gray-400 pb-[1px]">x</span>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="flex items-center h-[40px] w-[40px] mt-[22px] mx-2"
        onClick={handleAddTab}
      >
        <Image
          src="/icons/add-circle.svg"
          alt="add"
          width={27}
          height={27}
          className="mr-1"
        />
      </button>
    </div>
  )
}

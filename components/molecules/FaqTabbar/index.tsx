import React, { useState } from 'react'
import randomString from '../../../utils/randomString'
interface Tab {
  name: string
  onClick: () => void
}
interface FaqTabbarProps {
  tabs: Tab[]
}
const FaqTabbar = ({ tabs }: FaqTabbarProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <div className="w-full bg-light rounded divide-y divide-borderLight">
      {tabs.map((tab, index) => {
        return (
          <div
            key={randomString(64)}
            className={`py-3 px-10 cursor-pointer ${
              activeTabIndex === index ? 'text-white' : 'text-muted'
            }`}
            onClick={() => {
              setActiveTabIndex(index)
              tab.onClick()
            }}
          >
            {tab.name}
          </div>
        )
      })}
    </div>
  )
}

export default FaqTabbar

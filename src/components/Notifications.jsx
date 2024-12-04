import React from "react"
import { notifications } from "../constants/data"
import { useStateContext } from "../contextProvider/contextProvider"

const Notifications = () => {
  const { themeColor } = useStateContext()
  return (
    <div className="w-80 shadow-box absolute rounded-md right-2 sm:right-0 top-14 bg-lightPrimary dark:bg-darkThird dark:border dark:border-gray-700 z-50">
      <div className="flex gap-3 items-center justify-between border-b dark:border-gray-700 p-5">
        <h2 className="font-semibold">Notifications</h2>
        <div className="px-2 py-0.5 bg-pink-500 text-gray-100 text-xs rounded-md">
          {notifications.length} Unread
        </div>
      </div>

      <div className="overflow-x-auto">
        {notifications.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-3 items-center border-b dark:border-darkBorder hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer px-5 py-2.5"
            >
              <div
                className="text-3xl bg-gray-100 dark:bg-gray-700 p-2 rounded-md"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col overflow-x-auto">
                <div className="font-medium text-sm">{item.name}</div>
                <div className="text-sm truncate text-gray-500">
                  {item.message}
                </div>
                <div className="text-xs text-gray-400">{item.time}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-5 mb-5 mt-1.5">
        <button
          className="w-full py-2 mt-3 rounded-md text-gray-100 text-sm hover:opacity-80"
          style={{ backgroundColor: themeColor }}
        >
          See all notifications
        </button>
      </div>
    </div>
  )
}

export default Notifications

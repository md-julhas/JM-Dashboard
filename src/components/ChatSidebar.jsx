import React, { useEffect, useRef, useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import sakib from "../assets/sakib.png"
import { CiSettings } from "react-icons/ci"
import { IoCloseSharp } from "react-icons/io5"
import { MdOutlineSearch } from "react-icons/md"
import { conversationSections, conversationsPeople } from "../constants/data"
import { FaUser } from "react-icons/fa"

const ChatSidebar = () => {
  const { isChatSidebar, setIsChatSidebar, openChatSidebarMenuBtnRef } =
    useStateContext()

  const chatSidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        chatSidebarRef.current &&
        isChatSidebar &&
        !chatSidebarRef.current.contains(e.target) &&
        !openChatSidebarMenuBtnRef.current.contains(e.target)
      ) {
        setIsChatSidebar(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isChatSidebar])

  return (
    <div
      ref={chatSidebarRef}
      className={`bg-lightPrimary dark:bg-darkThird border-r md:border-none dark:border-gray-700 shadow-sm w-72 xl:w-96 flex-shrink-0 h-full absolute left-0 top-0 md:static rounded-md transition-transform duration-300 px-5 ${
        isChatSidebar ? "translate-x-0" : "-translate-x-[110%]"
      } md:translate-x-0 z-10`}
    >
      {/* Chat header */}
      <div className="flex justify-between items-center py-3 border-b dark:border-gray-700">
        <div className="flex gap-3">
          <div className="relative w-fit">
            <img
              src={sakib}
              alt="sakib"
              style={{ height: "40px", width: "40px" }}
              className="rounded-full"
            />
            <div className="bg-green-500 h-3 w-3 bottom-0 right-0 absolute rounded-full border-2 border-gray-200"></div>
          </div>

          <div>
            <b>Sakib Al Hassan</b>
            <div className="text-[14px] text-gray-400">Product Manager</div>
          </div>
        </div>
        <div className="flex text-xl">
          <button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md">
            <CiSettings />
          </button>
          <button
            className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md block md:hidden"
            onClick={() => setIsChatSidebar(false)}
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          className="bg-gray-200 dark:bg-gray-700 w-full mt-7 py-3 rounded-full outline-none pl-10 text-sm"
          placeholder="People, groups & messages..."
        />
        <MdOutlineSearch className="absolute top-[46px] left-4" />
      </div>

      <div className="mt-7 flex justify-between dark:text-darkText border-b dark:border-gray-700 pb-5">
        {conversationSections.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-[2px] text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>
            <b className="text-sm">{item.name}</b>
          </div>
        ))}
      </div>

      {/* Chat people */}
      <div className="overflow-y-auto" style={{ height: "calc(100% - 260px)" }}>
        {conversationsPeople.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <div className="flex gap-3 overflow-x-auto">
              <img
                src={item.img}
                alt={item.name}
                style={{ height: "40px", width: "40px" }}
                className={`rounded-full ${item.img ? "block" : "hidden"}`}
              />
              <div
                className={`text-[26px] bg-gray-300 dark:bg-gray-600 p-2 h-fit rounded-full ${
                  item.img ? "hidden" : "block"
                }`}
              >
                <FaUser />
              </div>
              <div className="text-sm overflow-x-auto">
                <b className="capitalize">{item.name}</b>
                <p className="text-gray-400 dark:text-gray-500 text-[14px] pt-1 truncate">
                  {item.text}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end text-[13px] gap-2">
              <span className="text-gray-500">{item.time}</span>
              <span className="bg-red-500 text-gray-200 px-1 text-xs rounded-md">
                {item.notifications ? item.notifications : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatSidebar

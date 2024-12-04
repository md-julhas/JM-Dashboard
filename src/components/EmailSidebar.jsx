import React, { useEffect, useRef } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { emailCategories, emailLabels } from "../constants/data"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

const EmailSidebar = () => {
  const {
    themeColor,
    isEmailSidebar,
    setIsEmailSidebar,
    openEmailSidebarMenuBtnRef,
  } = useStateContext()
  const emailSidebarRef = useRef(null)
  const location = useLocation()
  const currentPath = location.pathname.replace(/\/+$/, "")

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emailSidebarRef.current &&
        isEmailSidebar &&
        !emailSidebarRef.current.contains(e.target) &&
        !openEmailSidebarMenuBtnRef.current.contains(e.target)
      ) {
        setIsEmailSidebar(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isEmailSidebar])

  return (
    <div
      ref={emailSidebarRef}
      className={`bg-lightPrimary dark:bg-darkThird dark:border-r dark:border-gray-700 md:dark:border-none shadow-box md:shadow-sm w-72 flex-shrink-0 h-full absolute left-0 top-0 md:static rounded-md transition-transform duration-300 px-7 ${
        isEmailSidebar ? "translate-x-0" : "-translate-x-[110%]"
      } md:translate-x-0 z-10`}
    >
      {/* Compose email */}
      <div
        className="rounded-md hover:opacity-90"
        style={{ backgroundColor: themeColor }}
      >
        <Link
          to="/email/compose"
          className="flex items-center justify-center py-2 my-5 gap-1 text-gray-100"
          onClick={() => setIsEmailSidebar(false)}
        >
          <FiPlus />
          Compose
        </Link>
      </div>

      {/* Email categories */}
      <div className="overflow-y-auto" style={{ height: "calc(100% - 95px )" }}>
        <div className="border-b dark:border-gray-700">
          {emailCategories.map((item) => (
            <Link key={item.name} to={`/email/${item.path}`}>
              <div
                className={`flex items-center mb-1 justify-between capitalize hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md 
                ${
                  currentPath.startsWith(`/email/${item.path}`)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => setIsEmailSidebar(false)}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  {item.number}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7">
          <h3 className="font-semibold">Labels</h3>
          {emailLabels.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:font-semibold"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Close email sidebar in small screen */}
      <div className="fixed right-1 bottom-2">
        <button
          className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md block md:hidden text-2xl"
          onClick={() => setIsEmailSidebar(false)}
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>
    </div>
  )
}

export default EmailSidebar

import React from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { RiSpam2Line } from "react-icons/ri"

const Spam = () => {
  const {
    themeColor,
    openEmailSidebarMenuBtnRef,
    isEmailSidebar,
    setIsEmailSidebar,
  } = useStateContext()

  return (
    <div className="h-full w-full bg-lightPrimary dark:bg-darkThird rounded-md space-y-4 px-5 flex flex-col justify-center items-center text-center shadow-sm">
      <h2 className="text-3xl font-semibold">No Spam Emails</h2>
      <p className="text-lg">
        You have no spam emails at the moment. Enjoy your day!
      </p>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700">
        <RiSpam2Line className="text-4xl text-gray-400 dark:text-darkText" />
      </div>

      <button
        ref={openEmailSidebarMenuBtnRef}
        type="button"
        onClick={() => setIsEmailSidebar(!isEmailSidebar)}
        className="text-gray-100 px-5 py-2 rounded-full hover:opacity-90 md:hidden"
        style={{ backgroundColor: themeColor }}
      >
        Open Email Menu
      </button>
    </div>
  )
}

export default Spam

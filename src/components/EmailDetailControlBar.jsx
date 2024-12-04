import React, { useRef, useState } from "react"
import { HiArchive, HiDotsVertical } from "react-icons/hi"
import { MdDelete, MdMenu, MdOutlineArrowBack } from "react-icons/md"
import { RiSpam2Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../contextProvider/contextProvider"
import useClickOutside from "../hooks/useClickOutside"
import { emailsShowMoreOptions } from "../constants/data"
import { Tooltip } from "@mui/material"

const EmailDetailControlBar = ({
  emailId,
  emailList,
  setEmailList,
  setNotifications,
}) => {
  const { openEmailSidebarMenuBtnRef, setIsEmailSidebar } = useStateContext()
  const navigate = useNavigate()
  const [isShowMore, setIsShowMore] = useState(false)
  const showMoreRef = useRef(null)
  useClickOutside(showMoreRef, isShowMore, setIsShowMore)

  const handleArchiveEmail = () => {
    setNotifications("Email archived")
  }

  const handleSpamEmail = () => {
    setEmailList(emailList.filter((email) => email.id !== emailId))
    addNotification("Reported spam ")
  }

  const handleDeleteEmail = () => {
    setEmailList(emailList.filter((email) => email.id !== emailId))
    addNotification("Email deleted")
  }

  const addNotification = (message) => {
    setNotifications(message)
    setTimeout(() => {
      setNotifications("")
    }, 3000)
  }

  return (
    <div className="h-16 border-b text-gray-500 dark:text-darkText text-2xl dark:border-gray-700 dark:bg-darkThird flex items-center gap-5 px-5">
      {/* Open email sidebar menu in small screen */}
      <button
        ref={openEmailSidebarMenuBtnRef}
        type="button"
        onClick={() => setIsEmailSidebar(true)}
        className="text-3xl md:hidden"
      >
        <MdMenu />
      </button>

      {/* Back from email detail */}
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        <MdOutlineArrowBack />
      </button>

      <Tooltip title="Archive" arrow>
        <button onClick={handleArchiveEmail}>
          <HiArchive />
        </button>
      </Tooltip>

      <Tooltip title="Report spam" arrow>
        <button onClick={handleSpamEmail}>
          <RiSpam2Fill />
        </button>
      </Tooltip>

      <Tooltip title="Delete" arrow>
        <button onClick={handleDeleteEmail}>
          <MdDelete />
        </button>
      </Tooltip>

      <div ref={showMoreRef} className="relative flex items-center">
        <button onClick={() => setIsShowMore(!isShowMore)} className="text-xl">
          <HiDotsVertical />
        </button>

        {isShowMore && (
          <div className="bg-lightPrimary dark:bg-darkThird text-gray-600 w-fit shadow-box rounded-md absolute z-10 top-8 right-0 sm:left-0 whitespace-nowrap dark:border dark:border-gray-700 p-1">
            {emailsShowMoreOptions.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 rounded-md cursor-pointer capitalize text-[18px]"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                <span>{item.icon}</span>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailDetailControlBar

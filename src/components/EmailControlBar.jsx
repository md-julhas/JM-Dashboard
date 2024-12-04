import React, { useRef, useState } from "react"
import { MdMenu } from "react-icons/md"
import Tooltip from "@mui/material/Tooltip"
import { useStateContext } from "../contextProvider/contextProvider"
import { emailActions, emailsShowMoreOptions } from "../constants/data"
import { IoCloseOutline } from "react-icons/io5"
import PropTypes from "prop-types"
import { HiDotsVertical } from "react-icons/hi"
import useClickOutside from "../hooks/useClickOutside"
import { IoIosCheckmark } from "react-icons/io"

const EmailControlBar = ({
  emailList,
  setEmailList,
  selectedEmails,
  setSelectedEmails,
}) => {
  const { openEmailSidebarMenuBtnRef, setIsEmailSidebar, themeColor } =
    useStateContext()

  const [notifications, setNotifications] = useState([])
  const [isShowMore, setIsShowMore] = useState(false)
  const showMoreRef = useRef(null)
  useClickOutside(showMoreRef, isShowMore, setIsShowMore)

  const handleSelectAllClick = () => {
    if (selectedEmails.length === emailList.length) {
      setSelectedEmails([])
    } else {
      setSelectedEmails(emailList.map((email) => email.id))
    }
  }

  const handleArchiveEmail = () => {
    setSelectedEmails([])
    addNotification(
      selectedEmails.length > 1 ? "Email's archived" : "Email archived"
    )
  }

  const handleSpamEmail = () => {
    setEmailList(
      emailList.filter((email) => !selectedEmails.includes(email.id))
    )
    setSelectedEmails([])
    addNotification(
      selectedEmails.length > 1
        ? "Email's marked as spam"
        : "Email marked as spam"
    )
  }

  const handleDeleteEmail = () => {
    setEmailList(
      emailList.filter((email) => !selectedEmails.includes(email.id))
    )
    setSelectedEmails([])
    addNotification(
      selectedEmails.length > 1 ? "Email's deleted" : "Email deleted"
    )
  }

  const addNotification = (message) => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, message }])

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 3000)
  }

  return (
    <div className="h-16 border-b dark:border-gray-700 dark:bg-darkThird flex items-center gap-5 px-5">
      {/* Display menu btn for small screen */}
      <button
        ref={openEmailSidebarMenuBtnRef}
        type="button"
        onClick={() => setIsEmailSidebar(true)}
        className="text-3xl md:hidden"
      >
        <MdMenu />
      </button>

      {/* Select all email btn */}
      <button
        onClick={handleSelectAllClick}
        className="h-5 w-5 flex items-center justify-center text-xl rounded-sm"
        style={{
          borderWidth: "1px",
          borderColor:
            selectedEmails.length === emailList.length ? themeColor : "#abb2bf",
        }}
      >
        <span>
          <IoIosCheckmark
            style={{
              display:
                selectedEmails.length === emailList.length ? "block" : "none",
              color: themeColor,
            }}
          />
        </span>
      </button>

      {/* Email actions btns (archive, spam, delete) */}
      {emailActions.map((item, index) => (
        <Tooltip key={index} title={item.tooltip} arrow>
          <span className="flex items-center">
            <button
              className={`text-2xl ${
                selectedEmails.length === 0 ? "opacity-50 cursor-default" : ""
              }`}
              onClick={() => {
                if (item.name === "delete" && selectedEmails.length > 0) {
                  handleDeleteEmail()
                } else if (item.name === "spam" && selectedEmails.length > 0) {
                  handleSpamEmail()
                } else if (
                  item.name === "archive" &&
                  selectedEmails.length > 0
                ) {
                  handleArchiveEmail()
                }
              }}
            >
              {item.icon}
            </button>
          </span>
        </Tooltip>
      ))}

      <div ref={showMoreRef} className="relative flex items-center">
        <button
          className={`rounded-md text-xl ${
            selectedEmails.length === 0 ? "opacity-50 cursor-default" : ""
          }`}
          disabled={selectedEmails.length === 0}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <HiDotsVertical />
        </button>

        {isShowMore && (
          <div className="bg-lightPrimary dark:bg-darkThird w-fit shadow-box rounded-md absolute z-10 top-8 right-0 sm:left-0 whitespace-nowrap dark:border dark:border-gray-700 p-1">
            {emailsShowMoreOptions.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-md cursor-pointer capitalize"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                <span>{item.icon}</span>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="fixed bottom-5 right-5 z-10">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-darkThird text-darkText text-sm px-4 py-3 mb-2 flex gap-5 items-center justify-between rounded-md dark:border dark:border-gray-700"
          >
            {notification.message}
            <button
              onClick={() =>
                setNotifications((prev) =>
                  prev.filter((n) => n.id !== notification.id)
                )
              }
              className="text-xl"
            >
              <IoCloseOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

EmailControlBar.propTypes = {
  emailList: PropTypes.array.isRequired,
  setEmailList: PropTypes.func.isRequired,
  selectedEmails: PropTypes.array.isRequired,
  setSelectedEmails: PropTypes.func.isRequired,
}

export default EmailControlBar

import React, { useState } from "react"
import { IoIosCheckmark } from "react-icons/io"
import { useStateContext } from "../contextProvider/contextProvider"
import { emails as initialEmails } from "../constants/data"
import { EmailControlBar } from "../components"
import { GiRoundStar } from "react-icons/gi"
import { Link } from "react-router-dom"
import { IoMailOpenOutline } from "react-icons/io5"

const AllMail = () => {
  const {
    themeColor,
    openEmailSidebarMenuBtnRef,
    isEmailSidebar,
    setIsEmailSidebar,
  } = useStateContext()

  const [emailList, setEmailList] = useState(initialEmails)
  const [selectedEmails, setSelectedEmails] = useState([])

  const handleSelectEmail = (emailId) => {
    setSelectedEmails((prev) => {
      if (prev.includes(emailId)) {
        return prev.filter((id) => id !== emailId)
      } else {
        return [...prev, emailId]
      }
    })
  }

  const handleStarClick = (emailId) => {
    setEmailList((prev) =>
      prev.map((email) =>
        email.id === emailId ? { ...email, starred: !email.starred } : email
      )
    )
  }

  return (
    <div className="overflow-y-auto h-full w-full bg-lightPrimary dark:bg-darkThird rounded-md shadow-sm">
      {/* If emails exist then render email control bar */}
      {emailList.length > 0 && (
        <EmailControlBar
          emailList={emailList}
          setEmailList={setEmailList}
          selectedEmails={selectedEmails}
          setSelectedEmails={setSelectedEmails}
        />
      )}

      {/* Email lists */}
      {emailList.length === 0 ? (
        // Display no emails message
        <div className="flex flex-col items-center justify-center h-full space-y-4 px-5">
          <h2 className="text-3xl font-semibold">No Emails</h2>
          <p className="text-lg text-center">
            You have no emails at the moment. Enjoy your day!
          </p>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700">
            <IoMailOpenOutline className="text-4xl text-gray-400 dark:text-darkText" />
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
      ) : (
        // Render email lists
        <div
          className="relative overflow-x-auto"
          style={{
            height: "calc(100% - 84px)",
          }}
        >
          {emailList.map((email) => (
            <div
              key={email.id}
              className={`flex items-center gap-5 px-5 min-w-[600px] border-b border-gray-100 dark:border-gray-700 ${
                selectedEmails.includes(email.id)
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "bg-lightPrimary dark:bg-darkThird"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              {/* Select emails */}
              <button
                onClick={() => handleSelectEmail(email.id)}
                className="h-5 w-5 flex-shrink-0 rounded-sm text-xl"
                style={{
                  borderWidth: "1px",
                  borderColor: selectedEmails.includes(email.id)
                    ? themeColor
                    : "#abb2bf",
                }}
              >
                <span>
                  <IoIosCheckmark
                    style={{
                      display: selectedEmails.includes(email.id)
                        ? "block"
                        : "none",
                      color: themeColor,
                    }}
                  />
                </span>
              </button>

              {/* Starred email */}
              <button
                className="text-xl text-gray-300"
                onClick={() => handleStarClick(email.id)}
              >
                <span>
                  <GiRoundStar
                    style={{
                      color: email.starred ? "#EDD400" : "inherit",
                    }}
                  />
                </span>
              </button>

              <Link
                to={`/email/all-mail/${email.id}`}
                className="flex items-center gap-5 overflow-x-auto py-5"
              >
                <p
                  className={`flex-shrink-0 w-40 truncate ${
                    email.read ? "font-normal" : "font-semibold"
                  }`}
                >
                  {email.subject}
                </p>
                <p
                  className={`truncate ${
                    email.read ? "font-normal" : "font-semibold"
                  }`}
                >
                  {email.body}
                </p>
                <span className="flex-shrink-0 text-gray-400 w-20 text-sm text-right capitalize">
                  {email.date}
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AllMail

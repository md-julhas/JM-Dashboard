import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useStateContext } from "../contextProvider/contextProvider"
import { emails } from "../constants/data"
import { EmailDetailControlBar } from "../components"
import { IoCloseOutline } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { LiaReplySolid } from "react-icons/lia"
import { TbArrowForwardUp } from "react-icons/tb"

const EmailDetail = () => {
  const {
    isEmailSidebar,
    setIsEmailSidebar,
    themeColor,
    openEmailSidebarMenuBtnRef,
  } = useStateContext()
  const { emailId } = useParams()

  const [notifications, setNotifications] = useState("")
  const [emailList, setEmailList] = useState(emails)
  const viewEmail = emailList.find((email) => email.id === emailId)

  const [isHover, setIsHover] = useState(false)

  return (
    <div className="overflow-y-auto h-full w-full bg-lightPrimary dark:bg-darkThird rounded-md">
      {viewEmail && (
        <EmailDetailControlBar
          emailId={emailId}
          emailList={emailList}
          setEmailList={setEmailList}
          setNotifications={setNotifications}
        />
      )}

      {viewEmail ? (
        <div
          className="relative overflow-x-auto bg-lightPrimary dark:bg-darkThird px-5"
          style={{
            height: "calc(100% - 75px)",
          }}
        >
          <div key={viewEmail.id} className="text-gray-600 dark:text-darkText">
            <h3 className="font-semibold text-xl mt-5">{viewEmail.subject}</h3>

            <div className="flex gap-2 my-5">
              {viewEmail.senderImg ? (
                <img
                  src={viewEmail.senderImg}
                  alt="icon"
                  style={{ height: "50px", width: "50px" }}
                  className="rounded-full"
                />
              ) : (
                <span className="p-2 bg-gray-200 dark:bg-gray-700 text-3xl rounded-full">
                  <FaUser />
                </span>
              )}
              <div>
                <b>{viewEmail.sender}</b>
                <p className="text-gray-400">{viewEmail.senderEmail}</p>
              </div>
            </div>

            {/* Static email body content */}
            <div className="space-y-5 border-b dark:border-gray-700 pb-5">
              <p>Hi Mr. Sakib Al Hassan,</p>
              <p>
                I hope this message finds you in good health. My name is Xu Tao,
                and I am interested in purchasing electric vehicles from your
                esteemed company.
              </p>
              <p>
                I am particularly interested in your latest models and would
                like to inquire about their pricing, availability, and any
                potential partnership opportunities we could explore together.
                Your company's reputation for innovation in the electric vehicle
                market is impressive, and I believe there is significant
                potential for us to collaborate effectively. I am keen to
                understand how we can align our objectives to mutually benefit
                from this partnership. Please let me know a suitable time for us
                to connect and discuss in more detail.
              </p>

              <p>
                Could we schedule a meeting or a call at your earliest
                convenience to discuss this further?
              </p>

              <p>Looking forward to your reply.</p>

              <div>
                <p>Best regards,</p>
                <p>{viewEmail.sender}</p>
              </div>
            </div>

            <div className="my-5 flex gap-5">
              <button
                className="flex gap-2 items-center rounded-md px-4 py-2 text-gray-100 hover:opacity-90"
                style={{ backgroundColor: themeColor }}
              >
                <LiaReplySolid />
                Reply
              </button>
              <button
                className={`flex gap-2 items-center rounded-md px-4 py-2 ${
                  isHover ? "text-gray-100" : ""
                }`}
                style={{
                  backgroundColor: isHover ? themeColor : "",
                  border: `1px solid ${themeColor}`,
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <TbArrowForwardUp />
                Forward
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-600 dark:text-darkText space-y-4 px-5">
          <h2 className="text-3xl font-semibold">No email to display</h2>
          <p className="text-lg text-center">
            You have no email at the moment. Enjoy your day!
          </p>
          <button
            ref={openEmailSidebarMenuBtnRef}
            type="button"
            onClick={() => setIsEmailSidebar(!isEmailSidebar)}
            className="text-gray-200 px-5 py-2 rounded-full hover:opacity-90 md:hidden"
            style={{ backgroundColor: themeColor }}
          >
            Open Email Menu
          </button>
        </div>
      )}

      {/* Notifications */}
      {notifications && (
        <div className="fixed bottom-4 right-4 z-10">
          <div className="bg-darkThird text-darkText text-sm px-4 py-3 mb-2 flex gap-5 items-center justify-between rounded-md">
            <span>{notifications}</span>
            <button onClick={() => setNotifications("")} className="text-xl">
              <IoCloseOutline />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailDetail

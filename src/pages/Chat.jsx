import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import { ChatSidebar, Footer, LayoutWithSideAndNavbar } from "../components"
import { IoIosSend } from "react-icons/io"
import { useStateContext } from "../contextProvider/contextProvider"
import { RiAttachment2 } from "react-icons/ri"
import { chatActionItems, messagesData } from "../constants/data"
import { GoDotFill } from "react-icons/go"
import { Tooltip } from "@mui/material"
import rayhan from "../assets/rayhan.png"
import sakib from "../assets/sakib.png"
import { MdMenu } from "react-icons/md"

const Chat = () => {
  const { themeColor, setIsChatSidebar, openChatSidebarMenuBtnRef } =
    useStateContext()

  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState(messagesData)

  const fileInputRef = useRef(null)
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        name: "sakib",
        img: sakib,
        text: messageInput,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
      setMessages([...messages, newMessage])
      setMessageInput("")
    }
  }

  return (
    <div>
      <Helmet>
        <title>Messenger App | JM Dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div
          className="m-5 sm:m-7 relative flex gap-7 text-gray-600 dark:text-darkText"
          style={{ height: "calc(100vh - 172px)" }}
        >
          <ChatSidebar />

          <div className="h-full w-full bg-lightPrimary dark:bg-darkThird shadow-sm rounded-md">
            {/* Chat header */}
            <div className="h-16 border-b dark:border-gray-700 bg-lightPrimary dark:bg-darkThird flex items-center justify-between mb-2 px-5 rounded-tl-md rounded-tr-md">
              <div className="flex gap-3 items-center">
                <button
                  ref={openChatSidebarMenuBtnRef}
                  type="button"
                  onClick={() => setIsChatSidebar(true)}
                  className="text-3xl md:hidden"
                >
                  <MdMenu />
                </button>

                <div className="relative">
                  <img
                    src={rayhan}
                    alt="rayhan"
                    style={{ height: "40px", width: "40px" }}
                    className="rounded-full"
                  />
                  <div className="block ss:hidden bg-green-500 h-3 w-3 border-2 border-gray-200 rounded-full absolute bottom-0 right-0"></div>
                </div>
                <div className="hidden ss:block">
                  <b className="ml-1">Rayhan</b>
                  <div className="flex items-center">
                    <GoDotFill className="text-xl text-green-500" />
                    <span className="text-[14px] text-gray-400">
                      Active Now
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                {chatActionItems.map((item) => (
                  <div key={item.name}>
                    <Tooltip title={item.name} arrow>
                      <button className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 text-xl rounded-md">
                        {item.icon}
                      </button>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>

            {/* Chats content */}
            <div
              className="w-full overflow-y-auto relative px-5"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                height: "calc(85% - 96px)",
              }}
            >
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`flex py-1 ${
                    item.name === "sakib" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-2 p-2 rounded-md ${
                      item.name === "sakib"
                        ? "bg-pink-20 justify-start"
                        : "bg-green-20 justify-end"
                    }`}
                  >
                    {item.name === "rayhan" ? (
                      <div className="flex gap-2 text-gray-500">
                        {/* img section on the left */}
                        <div className="flex flex-col items-center gap-1 flex-shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ height: "40px", width: "40px" }}
                            className="rounded-full"
                          />
                          <p className="text-[14px] uppercase">{item.time}</p>
                        </div>
                        {/* text section */}
                        <div className="flex flex-col justify-center rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-3 py-2 text-sm h-fit">
                          <b className="capitalize">{item.name}</b>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        {/* text section */}
                        <div className=" ml-16 h-fit py-2 px-3 bg-green-100 dark:bg-green-700 rounded-md text-sm flex flex-col text-end">
                          <b className="capitalize">{item.name}</b>
                          <p>{item.text}</p>
                        </div>
                        {/* img section on the right */}
                        <div className="flex flex-col gap-1 items-center flex-shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ height: "40px", width: "40px" }}
                            className="rounded-full"
                          />
                          <p className="text-gray-500 text-[14px] uppercase">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Messages input */}
            <div className="h-[15%] bg-gray-200 dark:bg-gray-700 flex items-center gap-4 mx-4 px-3 rounded-md">
              <input
                type="text"
                className="w-full border dark:border-darkBorder p-2 rounded-md outline-none dark:bg-gray-800"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />
              <div className="flex text-xl gap-1">
                <button
                  className="hover:bg-gray-500 text-gray-500 dark:text-gray-200 hover:text-gray-200 p-3 rounded-md"
                  onClick={() => fileInputRef.current.click()}
                >
                  <RiAttachment2 />
                  <input type="file" className="hidden" ref={fileInputRef} />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-3 text-gray-200 rounded-md hover:opacity-90"
                  style={{ backgroundColor: themeColor }}
                >
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </LayoutWithSideAndNavbar>
    </div>
  )
}

export default Chat

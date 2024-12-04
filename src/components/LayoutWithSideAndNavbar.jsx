import React, { useEffect, useRef, useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { Navbar, Sidebar } from "../components"
import { Tooltip } from "@mui/material"
import { MdOutlineArrowDropUp } from "react-icons/md"

const LayoutWithSideAndNavbar = ({ children }) => {
  const { activeMenu, themeColor } = useStateContext()
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  // Scroll top
  const scrollTopRef = useRef(null)
  const scrollToTop = () => {
    if (scrollTopRef.current) {
      scrollTopRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTopRef.current && scrollTopRef.current.scrollTop > 200) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    }

    const scrollElement = scrollTopRef.current

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll)

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex bg-lightPrimary dark:bg-darkPrimary">
      <Sidebar />
      <div
        className={`h-screen w-full bg-lightSecondary dark:bg-darkPrimary overflow-y-scroll transition-all duration-300 ${
          activeMenu ? "md:ml-56" : "ml-0"
        }`}
        ref={scrollTopRef}
      >
        <Navbar />
        <main>{children}</main>

        {/* Scroll top */}
        {showScrollBtn && (
          <Tooltip title="Go to top" arrow>
            <button
              onClick={scrollToTop}
              className="fixed bottom-9 right-8 rounded-full"
              style={{ backgroundColor: themeColor }}
            >
              <MdOutlineArrowDropUp className="text-4xl text-gray-200" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  )
}

export default LayoutWithSideAndNavbar

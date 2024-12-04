import React from "react"
import { useStateContext } from "../contextProvider/contextProvider"

const Footer = () => {
  const { themeColor } = useStateContext()

  return (
    <div className="bg-lightPrimary dark:bg-darkThird text-gray-500 dark:text-darkText text-sm p-5 sm:flex justify-between">
      <div>
        COPYRIGHT © {new Date().getFullYear()} JM Dashboard All rights Reserved
      </div>
      <div>
        Developed by <b style={{ color: themeColor }}>Md Juhas</b>
      </div>
    </div>
  )
}

export default Footer

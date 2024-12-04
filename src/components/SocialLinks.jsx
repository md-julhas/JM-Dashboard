import React from "react"
import { socialLinks } from "../constants/data"
import Tooltip from "@mui/material/Tooltip"
import { useStateContext } from "../contextProvider/contextProvider"

const SocialLinks = () => {
  const { themeColor } = useStateContext()
  return (
    <div className="flex gap-5 justify-center mt-5">
      {socialLinks.map((item) => (
        <div key={item.title}>
          <Tooltip title={item.title} arrow>
            <div
              className="text-2xl p-2 border dark:border-gray-700 rounded-md cursor-pointer"
              style={{ color: themeColor }}
            >
              {item.icon}
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  )
}

export default SocialLinks

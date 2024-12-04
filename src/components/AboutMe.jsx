import React from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import {
  userLanguageSkills,
  userPersonalInfo,
  userSkills,
  userSocialAccounts,
} from "../constants/data"

const AboutMe = () => {
  const { themeColor } = useStateContext()

  // Function to convert hex to RGBA for bg opacity color
  const hexToRgba = (hex, alpha) => {
    let r = 0,
      g = 0,
      b = 0

    // 3 digits
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    }
    // 6 digits
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16)
      g = parseInt(hex[3] + hex[4], 16)
      b = parseInt(hex[5] + hex[6], 16)
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <div className="mt-7 pb-5">
      {/* User about me */}
      <div>
        <h2 className="font-medium text-xl mb-3" style={{ color: themeColor }}>
          About Me
        </h2>
        <p>
          Hello! I’m Sakib Al Hassan, a dedicated administrator committed to
          enhancing user experiences and optimizing workflows. With a strong
          background in management and technology, I strive to create efficient
          systems that benefit both users and the organization. My approach
          focuses on collaboration and continuous improvement, ensuring every
          team member feels valued and empowered. I’m passionate about
          leveraging technology to solve problems and drive innovation.
        </p>
        <p className="mt-5">
          In my free time, I enjoy exploring new technologies and staying
          updated on industry trends. I believe that continuous learning is key
          to personal and professional growth.
        </p>
      </div>
      {/* User skills */}
      <div>
        <h2
          className="font-medium text-xl mt-7 mb-3"
          style={{ color: themeColor }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {userSkills.map((item, index) => (
            <div
              key={index}
              className="rounded-sm p-2 bg-gray-200 dark:bg-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* User language */}
      <div>
        <h2
          className="font-medium text-xl mt-7 mb-3"
          style={{ color: themeColor }}
        >
          Language
        </h2>
        <div className="flex flex-wrap gap-2">
          {userLanguageSkills.map((item, index) => (
            <div
              key={index}
              className="rounded-sm p-2 bg-gray-200 dark:bg-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Personal information */}
      <div>
        <h2
          className="font-medium text-xl mt-7 mb-3"
          style={{ color: themeColor }}
        >
          Personal Information
        </h2>
        <div className="space-y-2">
          {userPersonalInfo.map((item, index) => (
            <div key={index} className="flex items-center">
              <b className="w-36 mr-2 capitalize">{item.label} :</b>
              {item.label === "website" ? (
                <a
                  href={`https://${item.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-500">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* User social accounts */}
      <div className="">
        <h2
          className="font-medium text-xl mt-7 mb-5"
          style={{ color: themeColor }}
        >
          Social Platforms
        </h2>

        <div className="flex flex-wrap gap-8">
          {userSocialAccounts.map((item) => (
            <button key={item.name} className="flex items-center gap-3 flex-1">
              <div
                className="text-3xl p-2 text-gray-100 rounded-sm"
                style={{ backgroundColor: themeColor }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col items-start">
                <div className="capitalize">{item.name}</div>
                <div className="text-sm text-gray-400">{item.link}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe

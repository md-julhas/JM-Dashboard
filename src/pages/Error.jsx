import React from "react"
import { useStateContext } from "../contextProvider/contextProvider"

const Error = () => {
  const { themeColor } = useStateContext()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full p-8 bg-lightPrimary dark:bg-darkSecondary dark:border dark:border-darkBorder rounded-lg shadow-lg text-center">
        <h1 className="text-4xl text-gray-700 dark:text-darkText font-bold mb-4">
          Oops!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-500 mb-8">
          We're sorry, but the page you requested could not be found.
        </p>
        <a
          href="/#/"
          className="text-gray-100 px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ease-in-out inline-block hover:opacity-90"
          style={{ backgroundColor: themeColor }}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  )
}

export default Error

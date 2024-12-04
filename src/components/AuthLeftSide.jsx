import React from "react"

const AuthLeftSide = () => {
  return (
    <div className="bg-gray-200 dark:bg-darkSecondary h-screen hidden lg:flex flex-col justify-center items-center">
      <div className="w-3/4 flex flex-col gap-8">
        <h1 className="font-semibold text-6xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Wellcome to JM Dashboard
        </h1>
        <p className="text-2xl text-gray-500 dark:text-darkText">
          Manage your inventory, leads, and sales from a single platform
        </p>
      </div>
    </div>
  )
}

export default AuthLeftSide

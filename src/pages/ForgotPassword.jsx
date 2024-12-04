import React, { useState } from "react"

import { useStateContext } from "../contextProvider/contextProvider"
import { Link, useNavigate } from "react-router-dom"
import { AuthLeftSide } from "../components"
import { Helmet } from "react-helmet-async"

const ForgotPassword = () => {
  const { themeColor } = useStateContext()
  const navigate = useNavigate()

  const [isFocus, setIsFocus] = useState(null)
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    const emailRegularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegularEx.test(email)) {
      newErrors.email = "Invalid email format"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      setTimeout(() => {
        navigate("/auth/create-password")
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Authentication | JM dashboard</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center text-gray-600 dark:text-darkText">
        <AuthLeftSide />

        {/* Right side login section */}
        <div className="bg-gray-50 dark:bg-darkPrimary h-screen flex justify-center items-center">
          <div className="w-full xs:w-[500px] px-5 flex flex-col gap-3">
            <h4 className="font-semibold text-4xl">Forget Your Password?</h4>
            <p className="text-gray-500 dark:text-darkText ss:text-xl mb-3">
              Please enter your email address to initiate the password reset
              process
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email address (e.g., 123@example.com)"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setIsFocus("email")}
                  onBlur={() => setIsFocus(null)}
                  className="p-3 rounded-md outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
                  style={{
                    borderColor: isFocus === "email" ? themeColor : "",
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full p-3 mt-5 rounded-md text-gray-100 hover:opacity-90"
                style={{ backgroundColor: themeColor }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Recovery Email"}
              </button>
            </form>

            <div className="flex justify-center mt-3 text-gray-500 dark:text-darkText">
              Remembered your password?
              <Link
                to={"/auth/login"}
                className="ml-1"
                style={{ color: themeColor }}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

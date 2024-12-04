import React, { useState } from "react"

import { useStateContext } from "../contextProvider/contextProvider"
import { Link, useNavigate } from "react-router-dom"
import { AuthLeftSide, SocialLinks } from "../components"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import { Helmet } from "react-helmet-async"

const Login = () => {
  const { themeColor } = useStateContext()
  const navigate = useNavigate()

  const [isFocus, setIsFocus] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("jmdashboard.admin@info.com")
  const [password, setPassword] = useState("12345678")
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Email validation
    const emailRegularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegularEx.test(email)) {
      newErrors.email = "Invalid email format"
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      setTimeout(() => {
        navigate("/ecommerce")
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
            <h4 className="font-semibold text-4xl">Hi There!</h4>
            <h5 className="font-semibold text-2xl lg:hidden bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Wellcome to JM Dashboard
            </h5>
            <p className="text-gray-500 dark:text-darkText ss:text-xl mb-3">
              To access your dashboard, kindly input the details you provided
              during registration
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
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

              <div className="relative mt-5">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setIsFocus("password")}
                  onBlur={() => setIsFocus(null)}
                  className="p-3 rounded-md outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
                  style={{
                    borderColor: isFocus === "password" ? themeColor : "",
                  }}
                />

                <button
                  type="button"
                  onClick={(e) => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 mr-3 mt-10 text-xl"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}

              <div className="flex justify-between items-center mt-5">
                <label
                  htmlFor="remember"
                  className="cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2"
                  />
                  Remember me
                </label>

                <Link
                  to="/auth/forgot"
                  className="text-sm  hover:underline"
                  style={{ color: themeColor }}
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full p-3 mt-5 rounded-md text-gray-100 hover:opacity-90"
                style={{ backgroundColor: themeColor }}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
            </form>

            <SocialLinks />

            <div className="flex justify-center mt-3 text-gray-500 dark:text-darkText">
              Don't have an account?
              <Link
                to={"/auth/register"}
                className="ml-1"
                style={{ color: themeColor }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

import React, { useState } from "react"

import { useStateContext } from "../contextProvider/contextProvider"
import { Link, useNavigate } from "react-router-dom"
import { AuthLeftSide } from "../components"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import { Helmet } from "react-helmet-async"

const CreateNewPassword = () => {
  const { themeColor } = useStateContext()
  const navigate = useNavigate()

  const [isFocus, setIsFocus] = useState(null)

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [checkMatchPassword, setCheckMatchPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!password.trim()) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required"
    } else if (confirmPassword.length < 6) {
      newErrors.confirmPassword = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }))
    }
    setCheckMatchPassword("")
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    if (errors.confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }))
    }
    setCheckMatchPassword("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm() && password === confirmPassword) {
      setIsLoading(true)
      setTimeout(() => {
        navigate("/ecommerce")
        setIsLoading(false)
      }, 1000)
    } else {
      setCheckMatchPassword(true)
    }
  }

  return (
    <div className="text-gray-600 dark:text-darkText">
      <Helmet>
        <title>Authentication - JM dashboard</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        <AuthLeftSide />

        {/* Right side login section */}
        <div className="bg-gray-50 dark:bg-darkPrimary h-screen flex justify-center items-center">
          <div className="w-[350px] ss:w-[500px] flex flex-col gap-3">
            <h4 className="font-semibold text-4xl">Set Up Your New Password</h4>
            <p className="text-gray-500 dark:text-darkText ss:text-xl mb-3">
              Please craft a strong password to enhance the security of your
              account
            </p>

            <form
              className="text-gray-500 dark:text-darkText"
              onSubmit={handleSubmit}
            >
              <div className="relative mt-3">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Type your password"
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

                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div className="relative mt-3">
                <label htmlFor="confirm-password" className="font-medium">
                  Confirm Password
                </label>
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onChange={handleConfirmPasswordChange}
                  onFocus={() => setIsFocus("confirmPassword")}
                  onBlur={() => setIsFocus(null)}
                  className="p-3 rounded-md outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
                  style={{
                    borderColor:
                      isFocus === "confirmPassword" ? themeColor : "",
                  }}
                />

                <button
                  type="button"
                  onClick={(e) => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-0 top-0 mr-3 mt-10 text-xl"
                >
                  {showPasswordConfirm ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {!errors.password &&
                !errors.confirmPassword &&
                checkMatchPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    Passwords don't match. Please try again
                  </p>
                )}
              <button
                type="submit"
                className="w-full p-3 mt-4 rounded-md text-gray-100 transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: themeColor }}
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </button>
            </form>

            <div className="flex justify-center mt-4 text-gray-500 dark:text-darkText">
              Not now? Return
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

export default CreateNewPassword

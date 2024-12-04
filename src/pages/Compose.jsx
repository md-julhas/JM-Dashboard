import React, { useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { NavLink, useNavigate } from "react-router-dom"

const Compose = () => {
  const { themeColor } = useStateContext()
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [attachments, setAttachments] = useState([])
  const [errors, setErrors] = useState({ to: "", subject: "", body: "" })
  const [isFocus, setIsFocus] = useState(null)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setTo(e.target.value)
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, to: "Recipient is required" }))
    } else {
      setErrors((prev) => ({ ...prev, to: "" }))
    }
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, subject: "Subject is required" }))
    } else {
      setErrors((prev) => ({ ...prev, subject: "" }))
    }
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, body: "Body is required" }))
    } else {
      setErrors((prev) => ({ ...prev, body: "" }))
    }
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setAttachments(files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (to && subject && body) {
      console.log("Email Sent!", { to, subject, body, attachments })

      // Clear all fields after submission
      setTo("")
      setSubject("")
      setBody("")
      setAttachments([])
      setErrors({ to: "", subject: "", body: "" })
      navigate("/email/all-mail")
    }
  }

  return (
    <div className="overflow-y-auto h-full w-full bg-lightPrimary dark:bg-darkThird rounded-md shadow-sm p-5">
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="font-semibold text-xl">Compose New Mail</h2>
        {/* To Field */}
        <div>
          <input
            type="email"
            id="to"
            value={to}
            onChange={handleEmailChange}
            onFocus={() => setIsFocus("to")}
            onBlur={() => setIsFocus(null)}
            placeholder="Recipient's email address (e.g., 123@example.com)"
            className="p-3 rounded-sm outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
            style={{
              borderColor: isFocus === "to" ? themeColor : "",
            }}
          />
          {errors.to && (
            <p className="text-red-500 text-xs mt-1">{errors.to}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            onFocus={() => setIsFocus("subject")}
            onBlur={() => setIsFocus(null)}
            placeholder="Email Subject"
            className="p-3 rounded-sm outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
            style={{
              borderColor: isFocus === "subject" ? themeColor : "",
            }}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Body Field */}
        <div>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            onFocus={() => setIsFocus("body")}
            onBlur={() => setIsFocus(null)}
            placeholder="Write your message here..."
            className="p-3 rounded-sm outline-none block border border-gray-200 dark:border-gray-700 w-full dark:bg-darkThird"
            rows="8"
            style={{
              borderColor: isFocus === "body" ? themeColor : "",
            }}
          />
          {errors.body && (
            <p className="text-red-500 text-xs mt-1">{errors.body}</p>
          )}
        </div>

        {/* Attachment Field */}
        <div className="mt-5">
          <input
            type="file"
            id="attachments"
            multiple
            onChange={handleFileChange}
            className="file:bg-gray-200 dark:file:bg-gray-700 hover:file:opacity-90 file:text-gray-600 dark:file:text-darkText file:border-none file:mr-3 file:px-4 file:py-2 rounded-sm text-gray-500"
          />

          {attachments.length > 0 && (
            <div className="mt-2 space-y-2">
              <h4 className="font-semibold">Attached Files:</h4>
              <ul className="space-y-1">
                {attachments.map((file, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setAttachments(
                          attachments.filter((_, i) => i !== index)
                        )
                      }
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-2">
          <NavLink to={"/email/all-mail"}>
            <button
              type="button"
              className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-sm hover:opacity-90"
            >
              Cancel
            </button>
          </NavLink>
          <button
            type="submit"
            className="px-4 py-2 text-gray-100 rounded-sm hover:opacity-90 focus:outline-none"
            style={{ backgroundColor: themeColor }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Compose

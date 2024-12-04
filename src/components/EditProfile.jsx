import React, { useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { personalInfoInputFields } from "../constants/data"

const EditProfile = () => {
  const { themeColor } = useStateContext()
  const [isFocus, setIsFocus] = useState(null)
  const [aboutMe, setAboutMe] = useState("")
  const [skillsInputValue, setSkillsInputValue] = useState("")
  const [languageInputValue, setLanguageInputValue] = useState("")
  const [skills, setSkills] = useState([
    "Project Management",
    "Teamworks",
    "Networking",
  ])
  const [languageList, setLanguageList] = useState([
    "Arabic",
    "Spanish",
    "Portuguese",
  ])

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    website: "",
    designation: "",
    availability: "",
    joiningDate: "",
    age: "",
    location: "",
    experience: "",
  })

  const [socialPlatforms, setSocialPlatforms] = useState([
    { platformName: "Twitter", platformURL: "www.twitter.com/sakib3400" },
    { platformName: "Reddit", platformURL: "www.reddit.com/sakib3400" },
  ])
  const [socialPlatformInput, setSocialPlatformInput] = useState({
    platformName: "",
    platformURL: "",
  })

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  // Combined KeyDown function for skills and language inputs
  const handleKeyDown = (event, inputValue, setInputValue, list, setList) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault()
      setList([...list, inputValue.trim()])
      setInputValue("")
    }
  }

  // Combined Remove function for skills and language inputs
  const handleRemoveItem = (indexToRemove, list, setList) => {
    setList(list.filter((_, index) => index !== indexToRemove))
  }

  const handleSocialPlatformChange = (e) => {
    const { name, value } = e.target
    setSocialPlatformInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const addSocialPlatform = () => {
    if (socialPlatformInput.platformName && socialPlatformInput.platformURL) {
      setSocialPlatforms([...socialPlatforms, socialPlatformInput])
      setSocialPlatformInput({ platformName: "", platformURL: "" })
    }
  }

  const removeSocialPlatform = (indexToRemove) => {
    setSocialPlatforms(
      socialPlatforms.filter((_, index) => index !== indexToRemove)
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Reset Personal Information fields
    setAboutMe("")
    setPersonalInfo({
      name: "",
      email: "",
      website: "",
      designation: "",
      availability: "",
      joiningDate: "",
      age: "",
      location: "",
      experience: "",
    })
    setSkills([])
    setLanguageList([])
    setSocialPlatforms([])
    setSkillsInputValue("")
    setLanguageInputValue("")
    setSocialPlatformInput({ platformName: "", platformURL: "" })
  }

  const inputStyles =
    "w-full p-2 border border-gray-200 dark:border-gray-700 rounded-sm focus:outline-none dark:bg-darkThird"

  return (
    <div className="mt-7">
      <form action="" onSubmit={handleSubmit}>
        {/* About me */}
        <div className="mt-7">
          <h2
            className="font-medium text-xl mb-3"
            style={{ color: themeColor }}
          >
            About Me
          </h2>
          <textarea
            id="aboutMe"
            name="aboutMe"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            rows="5"
            className={inputStyles}
            placeholder="Tell about yourself..."
            onFocus={() => setIsFocus("aboutMe")}
            onBlur={() => setIsFocus(null)}
            style={{
              borderColor: isFocus === "aboutMe" ? themeColor : "",
            }}
          ></textarea>
        </div>

        {/* Skills */}
        <div className="mt-7">
          <h2 className="font-medium text-xl" style={{ color: themeColor }}>
            Skills
          </h2>

          {/* List of added skills */}
          <div className="flex flex-wrap gap-x-2 mb-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center bg-gray-200 dark:bg-gray-700 text-sm mt-3 px-3 py-1 rounded-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index, skills, setSkills)}
                  className="ml-2 hover:text-red-500"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>

          {/* Input fields to add skills */}
          <input
            value={skillsInputValue}
            onChange={(e) => setSkillsInputValue(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                skillsInputValue,
                setSkillsInputValue,
                skills,
                setSkills
              )
            }
            placeholder="Type a skill and press Enter to add"
            className={inputStyles}
            onFocus={() => setIsFocus("skills")}
            onBlur={() => setIsFocus(null)}
            style={{
              borderColor: isFocus === "skills" ? themeColor : "",
            }}
          />
        </div>

        {/* Language */}
        <div className="mt-7">
          <h2 className="font-medium text-xl" style={{ color: themeColor }}>
            Language
          </h2>

          {/* List of added language */}
          <div className="flex flex-wrap gap-x-2 mb-3">
            {languageList.map((language, index) => (
              <span
                key={index}
                className="flex items-center bg-gray-200 dark:bg-gray-700 text-sm mt-3 px-3 py-1 rounded-sm"
              >
                {language}
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveItem(index, languageList, setLanguageList)
                  }
                  className="hover:text-red-500"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>

          {/* Input fields to add language */}
          <input
            value={languageInputValue}
            onChange={(e) => setLanguageInputValue(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                languageInputValue,
                setLanguageInputValue,
                languageList,
                setLanguageList
              )
            }
            placeholder="Type a language and press Enter to add"
            className={inputStyles}
            onFocus={() => setIsFocus("language")}
            onBlur={() => setIsFocus(null)}
            style={{
              borderColor: isFocus === "language" ? themeColor : "",
            }}
          />
        </div>

        {/* Personal information */}
        <div className="mt-7">
          <h2
            className="font-medium text-xl mb-3"
            style={{ color: themeColor }}
          >
            Personal Information
          </h2>

          <div className="grid ss:grid-cols-2 gap-5">
            {personalInfoInputFields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block font-medium">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={personalInfo[field.name]}
                  onChange={handlePersonalInfoChange}
                  placeholder={field.placeholder}
                  className={inputStyles}
                  onFocus={() => setIsFocus(field.name)}
                  onBlur={() => setIsFocus(null)}
                  style={{
                    borderColor: isFocus === field.name ? themeColor : "",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social platforms */}
        <div className="mt-7">
          <h2 className="font-medium text-xl" style={{ color: themeColor }}>
            Social Platforms
          </h2>

          {/* List of added social platforms */}
          <div className="flex flex-wrap gap-x-2 mb-3">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-2 bg-gray-200 text-sm dark:bg-gray-700 mt-3 px-3 py-1 rounded-sm"
              >
                <div className="flex flex-wrap">
                  <div>{platform.platformName} &nbsp;</div>
                  <div className="text-blue-500">{platform.platformURL}</div>
                </div>

                <button
                  type="button"
                  onClick={() => removeSocialPlatform(index)}
                  className="hover:text-red-500"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Input fields to add social platform */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="platformName"
              value={socialPlatformInput.platformName}
              onChange={handleSocialPlatformChange}
              placeholder="Platform name (e.g., LinkedIn)"
              className={inputStyles}
              onFocus={() => setIsFocus("platformName")}
              onBlur={() => setIsFocus(null)}
              style={{
                borderColor: isFocus === "platformName" ? themeColor : "",
              }}
            />
            <input
              type="url"
              name="platformURL"
              value={socialPlatformInput.platformURL}
              onChange={handleSocialPlatformChange}
              placeholder="Profile URL"
              className={inputStyles}
              onFocus={() => setIsFocus("platformURL")}
              onBlur={() => setIsFocus(null)}
              style={{
                borderColor: isFocus === "platformURL" ? themeColor : "",
              }}
            />
            <button
              type="button"
              onClick={addSocialPlatform}
              className="w-fit px-4 py-2 rounded-sm bg-gray-300 dark:bg-gray-700 hover:opacity-90"
            >
              Add
            </button>
          </div>
        </div>

        {/* Save changes */}
        <div className="flex items-center justify-center mt-7 mb-2">
          <button
            type="submit"
            className="w-fit px-4 py-2 rounded-sm text-gray-200 hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile

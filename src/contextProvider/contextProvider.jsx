import { createContext, useContext, useRef, useState } from "react"

export const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor")
      : "#1FC35B"
  )
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )
  const [activeMenu, setActiveMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(undefined)
  const [settingSidebar, setSettingSidebar] = useState(false)
  const [isChatSidebar, setIsChatSidebar] = useState(false)
  const [isEmailSidebar, setIsEmailSidebar] = useState(false)
  const [backFromEmailDetail, setBackFromEmailDetail] = useState(false)

  const openEmailSidebarMenuBtnRef = useRef(null)
  const openChatSidebarMenuBtnRef = useRef(null)

  return (
    <StateContext.Provider
      value={{
        themeColor,
        setThemeColor,
        themeMode,
        setThemeMode,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        settingSidebar,
        setSettingSidebar,
        isChatSidebar,
        setIsChatSidebar,
        isEmailSidebar,
        setIsEmailSidebar,
        openEmailSidebarMenuBtnRef,
        openChatSidebarMenuBtnRef,
        backFromEmailDetail,
        setBackFromEmailDetail,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)

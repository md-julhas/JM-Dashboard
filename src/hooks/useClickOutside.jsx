import { useEffect } from "react"

const useClickOutside = (elementRefs, isOpenState, setIsOpenState) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        elementRefs.current &&
        isOpenState &&
        !elementRefs.current.contains(e.target)
      ) {
        setIsOpenState(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [elementRefs, isOpenState, setIsOpenState])
}

export default useClickOutside

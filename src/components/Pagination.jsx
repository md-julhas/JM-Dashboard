import React from "react"
import { useStateContext } from "../contextProvider/contextProvider"

function Pagination({ currentPage, totalPages, onPageChange }) {
  const { themeColor } = useStateContext()

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleClick = (page) => {
    onPageChange(page)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrevious}
        className={`border dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
          currentPage === 1
            ? "opacity-70 cursor-default hover:bg-transparent dark:hover:bg-transparent"
            : ""
        }`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className="px-3 py-1 text-sm border dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            style={
              page === currentPage
                ? {
                    backgroundColor: themeColor,
                    border: `1px solid ${themeColor}`,
                    color: "#FFFFFF",
                  }
                : {}
            }
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={handleNext}
        className={`border dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
          currentPage === totalPages
            ? "opacity-70 cursor-default hover:bg-transparent dark:hover:bg-transparent"
            : ""
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination

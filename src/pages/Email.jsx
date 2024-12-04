import React from "react"
import { Helmet } from "react-helmet-async"
import { EmailSidebar, Footer, LayoutWithSideAndNavbar } from "../components"
import { Outlet } from "react-router-dom"

const Email = () => {
  return (
    <>
      <Helmet>
        <title>Email - JM Dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div
          className="m-5 sm:m-7 relative flex gap-2 text-gray-600 dark:text-darkText"
          style={{ height: "calc(100vh - 177px)" }}
        >
          <EmailSidebar />
          <Outlet />
        </div>

        <Footer />
      </LayoutWithSideAndNavbar>
    </>
  )
}

export default Email

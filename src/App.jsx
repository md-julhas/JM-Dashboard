import React, { useEffect } from "react"
import { useStateContext } from "./contextProvider/contextProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import {
  CreateNewPassword,
  Analytics,
  Ecommerce,
  Error,
  ForgotPassword,
  Login,
  Register,
  TwoStepVerification,
  Chat,
  Email,
  AllMail,
  Inbox,
  EmailDetail,
  Compose,
  Starred,
  Importants,
  SentMail,
  Spam,
  Trash,
  Kanban,
  Products,
  ProductDetail,
  UserProfile,
} from "./pages"

const App = () => {
  const { themeMode, setActiveMenu, screenSize, setScreenSize } =
    useStateContext()

  // Screen size management effect
  useEffect(() => {
    const hanldeResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", hanldeResize)
    hanldeResize()
    return () => window.removeEventListener("resize", hanldeResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1060) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className={`${themeMode === "dark" ? "dark" : "light"}`}>
          <Routes>
            {/* Auth routes */}
            <Route path="/" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route
              path="/auth/create-password"
              element={<CreateNewPassword />}
            />
            <Route path="/auth/forgot" element={<ForgotPassword />} />
            <Route path="/auth/register" element={<Register />} />
            <Route
              path="/auth/two-step-verify"
              element={<TwoStepVerification />}
            />

            {/* App routes */}
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/chat" element={<Chat />} />

            {/* Email app routes*/}
            <Route path="/email/*" element={<Email />}>
              <Route path="compose" element={<Compose />} />
              <Route path="all-mail" element={<AllMail />} />
              <Route path="all-mail/:emailId" element={<EmailDetail />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="inbox/:emailId" element={<EmailDetail />} />
              <Route path="starred" element={<Starred />} />
              <Route path="starred/:emailId" element={<EmailDetail />} />
              <Route path="importants" element={<Importants />} />
              <Route path="importants/:emailId" element={<EmailDetail />} />
              <Route path="sent-mail" element={<SentMail />} />
              <Route path="sent-mail/:emailId" element={<EmailDetail />} />
              <Route path="spam" element={<Spam />} />
              <Route path="spam/:emailId" element={<EmailDetail />} />
              <Route path="trash" element={<Trash />} />
              <Route path="trash/:emailId" element={<EmailDetail />} />
            </Route>

            <Route path="/kanban" element={<Kanban />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-detail" element={<ProductDetail />} />

            <Route path="/user-profile" element={<UserProfile />} />

            {/* Error route */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

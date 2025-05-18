import { Outlet } from "react-router-dom"
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme"
import { classNames } from "~shared/lib/classNames/classNames"
import { Navbar } from "~widgets/Navbar"
import { Sidebar } from "~widgets/Sidebar"
import {Suspense} from "react";

export const Layout = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

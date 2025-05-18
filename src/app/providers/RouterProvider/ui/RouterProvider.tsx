import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "~pages/Layout"
import { routerConfig } from "~shared/config/routerConfig/routerConfig"
import {PageLoader} from "~widgets/PageLoader";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {Object.values(routerConfig).map(({ path, element }) => (
            <Route
              path={path}
              key={path}
              element={
                <Suspense fallback={<PageLoader />}>
                  {element}
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import {Suspense, useEffect} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "~pages/Layout"
import { routerConfig } from "~shared/config/routerConfig/routerConfig"
import {PageLoader} from "~widgets/PageLoader";
import {useAppDispatch} from "~shared/hooks/useAppDispatch";
import {userActions} from "~entities/user";

export const AppRouter = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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

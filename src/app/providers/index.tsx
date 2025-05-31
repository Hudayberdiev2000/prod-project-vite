import { AppRouter } from "./RouterProvider"
import { ThemeProvider } from "./ThemeProvider"
import ErrorBoundary from "~app/providers/ErrorBoundary";
import {StoreProvider} from "~app/providers/StoreProvider";
import {BrowserRouter} from "react-router-dom";

export const Provider = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  )
}

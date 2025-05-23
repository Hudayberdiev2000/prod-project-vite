import { AppRouter } from "./RouterProvider"
import { ThemeProvider } from "./ThemeProvider"
import ErrorBoundary from "~app/providers/ErrorBoundary";
import {StoreProvider} from "~app/providers/StoreProvider";

export const Provider = () => {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  )
}

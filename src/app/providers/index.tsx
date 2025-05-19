import { AppRouter } from "./RouterProvider"
import { ThemeProvider } from "./ThemeProvider"
import ErrorBoundary from "~app/providers/ErrorBoundary";

export const Provider = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

import { AppRouter } from "./RouterProvider"
import { ThemeProvider } from "./ThemeProvider"

export const Provider = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

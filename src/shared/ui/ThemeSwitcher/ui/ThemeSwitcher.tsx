import { classNames } from "~shared/lib/classNames/classNames"
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme"
import DarkIcon from "~shared/assets/icons/theme-dark.svg?react"
import LightIcon from "~shared/assets/icons/theme-light.svg?react"
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext"
import { Button, ThemeButton } from "~shared/ui/Button/Button"
import {memo} from "react";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})

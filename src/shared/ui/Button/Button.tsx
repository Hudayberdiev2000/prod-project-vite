import { classNames } from "~shared/lib/classNames/classNames"
import cls from "./Button.module.scss"
import { FC, HtmlHTMLAttributes } from "react"

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.PRIMARY,
    ...otherProps
  } = props
  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  )
}

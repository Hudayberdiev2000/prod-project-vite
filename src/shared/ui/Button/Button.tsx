import { classNames } from "~shared/lib/classNames/classNames"
import cls from "./Button.module.scss"
import { FC, HtmlHTMLAttributes } from "react"

export enum ThemeButton {
  PRIMARY = "primary",
  CLEAR = "clear",
  CLEAR_INVERTED = "clear_inverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background-inverted",
}

export  enum  ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.PRIMARY,
      square = false,
      size = ButtonSize.M,
    ...otherProps
  } = props
  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, {[cls.square]: square},
          [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  )
}

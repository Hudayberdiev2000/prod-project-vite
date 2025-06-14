import { Link, LinkProps } from "react-router-dom"
import { classNames } from "~shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"
import {FC, memo} from "react"

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  )
})

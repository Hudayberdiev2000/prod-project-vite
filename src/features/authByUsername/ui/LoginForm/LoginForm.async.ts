import { lazy } from "react"
import {LoginFormProps} from "~features/authByUsername/ui/LoginForm/LoginForm";

export const LoginFormAsync = lazy<React.FC<LoginFormProps>>(
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve(import('./LoginForm')), 1500)
        )
)

import { classNames } from "~shared/lib/classNames/classNames"
import styles from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "~shared/ui/Button/Button"
import { Input } from "~shared/ui/input/Input"
import { useSelector } from "react-redux"
import { memo, useCallback } from "react"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "~features/authByUsername/model/services/loginByUsername/loginByUsername"
import { Text, TextTheme } from "~shared/ui/Text/Text"
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername"
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading"
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError"
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword"
import {DynamicModuleLoader, ReducerList} from "~shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "~shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback( async () => {
    const result = await dispatch(
      loginByUsername({ username, password }))

    console.log(result)
    if(result.meta.requestStatus === "fulfilled") {
      onSuccess()
    }
  }, [onSuccess, password, username, dispatch])

  return (
    <DynamicModuleLoader
        reducers={initialReducers}
        removeAfterUnmount
    >
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Form of Authorization")} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
        onChange={onChangeUsername}
        className={styles.input}
        type="text"
        placeholder={t("Enter username")}
        autoFocus
        value={username}
      />
        <Input
        className={styles.input}
        type="text"
        placeholder={t("Enter Password")}
        onChange={onChangePassword}
        value={password}
      />
        <Button
        onClick={onLoginClick}
        theme={ThemeButton.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
      >
          {t("login")}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm

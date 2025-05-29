import { classNames } from "~shared/lib/classNames/classNames"
import styles from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "~shared/ui/Button/Button"
import { Input } from "~shared/ui/input/Input"
import { useSelector, useStore } from "react-redux"
import { memo, useCallback, useEffect } from "react"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "~features/authByUsername/model/services/loginByUsername/loginByUsername"
import { useAppDispatch } from "~shared/hooks/useAppDispatch"
import { Text, TextTheme } from "~shared/ui/Text/Text"
import { ReduxStoreWithManager } from "~app/providers/StoreProvider"
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername"
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading"
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError"
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword"

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    store.reducerManager.add("loginForm", loginReducer)
      dispatch({type: "@INIT loginForm reducer"})

    return () => {
      store.reducerManager.remove("loginForm")
        dispatch({type: "@DESTROY loginForm reducer"})
    }
    // eslint-disable-next-line
  }, [])

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

  const onLoginClick = useCallback(() => {
    dispatch(
      loginByUsername({
        username,
        password,
      })
    )
  }, [password, username, dispatch])

  return (
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
  )
})

export default LoginForm

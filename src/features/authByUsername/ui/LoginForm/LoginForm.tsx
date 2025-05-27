import {classNames} from "~shared/lib/classNames/classNames"
import styles from "./LoginForm.module.scss"
import {useTranslation} from "react-i18next"
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {Input} from "~shared/ui/input/Input";
import {useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "~features/authByUsername/model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "~features/authByUsername/model/services/loginByUsername/loginByUsername";
import {useAppDispatch} from "~shared/hooks/useAppDispatch";
import {Text, TextTheme} from "~shared/ui/Text/Text";

export interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({ className }:LoginFormProps ) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            username, password
        }))
    }, [password, username, dispatch])

    return (
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t('Form of Authorization')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
            onChange={onChangeUsername}
            className={styles.input}
            type="text"
            placeholder={t('Enter username')}
            autoFocus
            value={username}
        />
        <Input
            className={styles.input}
            type="text"
            placeholder={t('Enter Password')}
            onChange={onChangePassword}
            value={password}
        />
        <Button
            onClick={onLoginClick}
            theme={ThemeButton.OUTLINE}
            className={styles.loginBtn}
            disabled={isLoading}
        >
          {t('login')}
        </Button>
      </div>
    )
})

export default LoginForm
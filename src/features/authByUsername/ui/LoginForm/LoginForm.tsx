import { classNames } from "~shared/lib/classNames/classNames"
import styles from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import {Button} from "~shared/ui/Button/Button";
import {Input} from "~shared/ui/input/Input";

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }:LoginFormProps ) => {
    const { t } = useTranslation()

    return (
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Input
            className={styles.input}
            type="text"
            placeholder={t('Enter username')}
            autoFocus
        />
        <Input
            className={styles.input}
            type="text"
            placeholder={t('Enter Password')}
        />
        <Button className={styles.loginBtn}>
          {t('login')}
        </Button>
      </div>
    )
}

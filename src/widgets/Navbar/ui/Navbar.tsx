import {classNames} from "~shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
    import {useCallback, useState} from "react";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "~features/authByUsername";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "~entities/user";
import {useAppDispatch} from "~shared/hooks/useAppDispatch";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const closeModal = useCallback(() => setOpen(false), [])
    const openModal = useCallback(() => setOpen(true), [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if(authData) {
      return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogout}
                  className={cls.links}
          >
            {t('Logout')}
          </Button>
        </div>
      )
    }

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED}
                onClick={openModal} className={cls.links}>
          {t('login')}
        </Button>
        <LoginModal  isOpen={open} onClose={closeModal} />
      </div>
  )
}

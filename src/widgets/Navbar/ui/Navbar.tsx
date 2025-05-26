import {classNames} from "~shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
    import {useCallback, useState} from "react";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "~features/authByUsername";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()
    const closeModal = useCallback(() => setOpen(false), [])
    const openModal = useCallback(() => setOpen(true), [])

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

import {classNames} from "~shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import {Modal} from "~shared/ui/Modal/Modal";
import {useCallback, useState} from "react";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()
    const toggleModal = useCallback(() => setOpen(prev => !prev), [])

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED}
                onClick={toggleModal} className={cls.links}>
          {t('login')}
        </Button>
        <Modal isOpen={open} onClose={toggleModal}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi delectus accusamus vero quas asperiores, distinctio reiciendis? Soluta itaque nemo,
          blanditiis nesciunt veritatis cum exercitationem
          iusto maiores quas numquam, quasi doloremque.
        </Modal>
      </div>
  )
}

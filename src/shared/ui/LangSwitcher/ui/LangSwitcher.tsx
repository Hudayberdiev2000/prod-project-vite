import {classNames} from "~shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"
import {Button, ThemeButton} from "~shared/ui/Button/Button"
import {useTranslation} from "react-i18next"

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tk" : "en")
  }
  return (
    <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={classNames(cls.LangSwitcher, {}, [className])}>
      {t("Language")}
    </Button>
  )
}

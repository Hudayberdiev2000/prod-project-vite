import {classNames} from "~shared/lib/classNames/classNames"
import {Button, ThemeButton} from "~shared/ui/Button/Button"
import {useTranslation} from "react-i18next"
import {memo} from "react";

interface LangSwitcherProps {
  className?: string
  short?:boolean
}

export const LangSwitcher = memo(({ short = false, className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tk" : "en")
  }
  return (
    <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={classNames("", {}, [className])}>
      {t(short ? "Language short" : "Language")}
    </Button>
  )
})

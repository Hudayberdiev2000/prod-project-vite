import {classNames} from "~shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import {memo, useState} from "react"
import {ThemeSwitcher} from "~shared/ui/ThemeSwitcher"
import {LangSwitcher} from "~shared/ui/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "~shared/ui/Button/Button";
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
      >
      <Button
            className={cls.collapsedBtn}
            onClick={onToggle} data-testid={"sidebar-toggle"}
            theme={ThemeButton.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
        >
        {
            collapsed ? ">" : "<"
          }</Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem collapsed={collapsed} key={item.path} item={item} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})

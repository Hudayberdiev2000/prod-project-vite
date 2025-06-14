import {AppLink, AppLinkTheme} from "~shared/ui/AppLink/AppLink";
import cls from "./SidebarItem.module.scss";
import {useTranslation} from "react-i18next";
import {SidebarItemType} from "../../model/items";
import {memo} from "react";
import {classNames} from "~shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props :SidebarItemProps ) => {
    const {item, collapsed} = props
    const {t} = useTranslation()
    return (
      <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, {[cls.collapsed]: collapsed})}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    )
})

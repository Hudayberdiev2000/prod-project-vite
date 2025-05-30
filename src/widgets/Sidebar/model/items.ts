import {FC, SVGProps} from "react";
import {RoutePaths} from "~shared/config/routerConfig/routerConfig";
import MainIcon from "~shared/assets/icons/main.svg?react"
import AboutIcon from "~shared/assets/icons/about.svg?react"
import ProfileIcon from "~shared/assets/icons/profile-20-20.svg?react"

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: FC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: "Main Page"
    },

    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: "About Page"
    },

    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: "Profile"
    }
]
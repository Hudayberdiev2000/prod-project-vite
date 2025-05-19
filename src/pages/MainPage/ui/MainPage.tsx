import { useTranslation } from "react-i18next"
import {BugButton} from "~app/providers/ErrorBoundary/ui/BugButton";

const MainPage = () => {
  const { t } = useTranslation()

  return <div>
    <BugButton />
    {t("Main Page")}</div>
}

export default MainPage

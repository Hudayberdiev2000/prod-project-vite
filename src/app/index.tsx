import { createRoot } from "react-dom/client"
import { Provider } from "./providers"
import "./styles/index.scss"

import "~shared/config/i18n/i18n"

createRoot(document.getElementById("root")!).render(<Provider />)

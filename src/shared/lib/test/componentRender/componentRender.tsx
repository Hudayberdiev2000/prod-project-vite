import {render} from "@testing-library/react";
import {ReactNode} from "react";
import { MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18nForTest from "~shared/config/i18n/i18nForTest";
import {StateSchema, StoreProvider} from "~app/providers/StoreProvider";
import {DeepPartial} from "vite-plugin-checker/dist/types";

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        initialState,
        route = '/'
    } = options
    return  render(
      <MemoryRouter initialEntries={[route]} >
        <StoreProvider initialState={initialState}>
          <I18nextProvider i18n={i18nForTest}>
            {component}
          </I18nextProvider>
        </StoreProvider>
      </MemoryRouter>
    )
}
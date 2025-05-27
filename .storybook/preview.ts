import type {Preview} from '@storybook/react'
import {RouterDecorator, StoreDecorator, StyleDecorator, ThemeDecorator} from "~shared/config/storybook";
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";
import {TranslationDecorator} from "~shared/config/storybook/TranslationDecorator/TranslationDecorator";

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator({
        loginForm: {
            username: "asdf",
            password: "dsiuyf"
        }
    }),
        TranslationDecorator
    ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
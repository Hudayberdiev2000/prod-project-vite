import type {Preview} from '@storybook/react'
import {RouterDecorator, StyleDecorator, ThemeDecorator} from "~shared/config/storybook";
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
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
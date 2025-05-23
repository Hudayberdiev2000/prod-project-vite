import {Decorator} from "@storybook/react";
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";
import {ThemeProvider} from "~app/providers/ThemeProvider";

export  const ThemeDecorator = (theme: Theme): Decorator =>
    (Story) => {
  return <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
}
import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "~shared/config/storybook"
import { LoginForm } from "./LoginForm"
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext"

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  args: {},
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
}

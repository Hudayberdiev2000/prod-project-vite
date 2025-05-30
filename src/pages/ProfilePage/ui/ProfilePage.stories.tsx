import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "~shared/config/storybook"
import ProfilePage from "./ProfilePage"
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext"
import { StoreDecorator } from "~shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: "test-class",
  },
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    className: "test-class",
  },
}

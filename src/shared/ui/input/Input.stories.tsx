import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "~shared/config/storybook"
import { Input } from "./Input"
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext"

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    placeholder: "Type text",
    value: "Test text",
  },
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: "Type text",
    value: "Test text",
  },
}

export const WithoutValue: Story = {
  args: {
    placeholder: "Type text",
  },
}

export const WithoutValueDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: "Type text",
  },
}

export const Focused: Story = {
  args: {
    placeholder: "Type text",
    value: "",
    autoFocus: true,
  },
}

export const FocusedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: "Type text",
    value: "",
    autoFocus: true,
  },
}

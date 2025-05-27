import type { Meta, StoryObj } from "@storybook/react"
import {StoreDecorator} from "~shared/config/storybook"
import { LoginForm } from "./LoginForm"

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
  decorators: [StoreDecorator({
    loginForm: {username: "asdf", password: "dsiuyf"}
  })],
  args: {},
}

  export const withError: Story = {
  decorators: [StoreDecorator({
    loginForm: {username: "asdf", password: "dsiuyf", error: "Error happened"}
  })],
  args: {},
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      isLoading: true
    }
  })],
  args: {},
}
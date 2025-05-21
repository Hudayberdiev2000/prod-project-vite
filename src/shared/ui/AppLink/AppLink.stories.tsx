import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"
import {AppLink, AppLinkTheme} from './AppLink'

import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        to: "/",
        children: "Link"
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

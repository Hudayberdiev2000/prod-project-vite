import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"
import {MainPage} from "~pages/MainPage";

import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'page/MainPage',
    component: MainPage,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    },
};

import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"
import {ThemeSwitcher} from './ThemeSwitcher'

import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ThemeSwitcher>;

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

import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"
import {Loader} from './Loader'

import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Loader>;

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

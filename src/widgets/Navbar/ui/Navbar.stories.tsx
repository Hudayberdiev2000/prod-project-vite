import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"
import {Navbar} from './Navbar'
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    args: {  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    },
};

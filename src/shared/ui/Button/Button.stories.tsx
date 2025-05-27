import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ThemeDecorator} from "~shared/config/storybook"


import {Button, ButtonSize, ThemeButton} from './Button';
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Test"
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: "Test"
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: "Test"
    },
};

export const Clear_inverted: Story = {
    args: {
        theme: ThemeButton.CLEAR_INVERTED,
        children: "Test"
    },
};

export const ClearDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: ThemeButton.CLEAR,
        children: "Test"
    },
};


export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: "Test"
    },
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: ThemeButton.OUTLINE,
        children: "Test"
    },
};

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: "Test"
    },
};

export const Background_inverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: "Test"
    },
};

export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: ">",
        square:true
    },
};

export const SquareSizeM: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: ">",
        square:true,
        size: ButtonSize.M
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: ">",
        square:true,
        size: ButtonSize.L
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: ">",
        square:true,
        size: ButtonSize.XL
    },
};

export const Disabled: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: ">",
        disabled: true
    },
};
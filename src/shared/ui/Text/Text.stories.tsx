import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"

import {Text, TextTheme} from './Text';
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
};

export const Error: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        theme: TextTheme.ERROR
    },
};

export const onlyTitle: Story = {
    args: {
        title: "Title lorem ipsum",
    },
};

export const onlyText: Story = {
    args: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: "Title lorem ipsum",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
};

export const onlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: "Title lorem ipsum",
    },
};

export const onlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
};
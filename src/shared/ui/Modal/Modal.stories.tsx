import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "~shared/config/storybook"

import {Modal} from './Modal';
import {Theme} from "~app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur\n" +
            "          adipisicing elit. Animi delectus accusamus vero quas asperiores, distinctio reiciendis? Soluta itaque nemo,\n" +
            "          blanditiis nesciunt veritatis cum exercitationem\n" +
            "          iusto maiores quas numquam, quasi doloremque."
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur\n" +
            "          adipisicing elit. Animi delectus accusamus vero quas asperiores, distinctio reiciendis? Soluta itaque nemo,\n" +
            "          blanditiis nesciunt veritatis cum exercitationem\n" +
            "          iusto maiores quas numquam, quasi doloremque."
    },
};


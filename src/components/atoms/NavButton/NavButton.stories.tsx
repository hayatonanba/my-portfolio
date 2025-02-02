import type { Meta, StoryObj } from '@storybook/react';
import NavButton from "./NavButton";

type T = typeof NavButton;

export default {
    title: 'atoms/NavButton',
    component: NavButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
    args: { children: "About", link: "/" }
};

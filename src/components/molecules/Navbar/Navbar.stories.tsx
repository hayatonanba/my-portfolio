import type { Meta, StoryObj } from '@storybook/react';
import Navbar from "./Navbar";

type T = typeof Navbar;

export default {
    title: 'molecules/Navbar',
    component: Navbar,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

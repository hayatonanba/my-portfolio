import type { Meta, StoryObj } from '@storybook/react';
import About from "./About";

type T = typeof About;

export default {
    title: 'organisms/About',
    component: About,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

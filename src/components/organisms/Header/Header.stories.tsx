import type { Meta, StoryObj } from '@storybook/react';
import Header from "./Header";

type T = typeof Header;

export default {
    title: 'organisms/Header',
    component: Header,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

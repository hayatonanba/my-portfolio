import type { Meta, StoryObj } from '@storybook/react';
import Works from "./Works";

type T = typeof Works;

export default {
    title: 'organisms/Works',
    component: Works,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

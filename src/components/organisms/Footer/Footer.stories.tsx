import type { Meta, StoryObj } from '@storybook/react';
import Footer from "./Footer";

type T = typeof Footer;

export default {
    title: 'organisms/Footer',
    component: Footer,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

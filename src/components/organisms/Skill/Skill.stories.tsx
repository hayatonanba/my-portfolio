import type { Meta, StoryObj } from '@storybook/react';
import Skill from "./Skill";

type T = typeof Skill;

export default {
    title: 'organisms/Skill',
    component: Skill,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

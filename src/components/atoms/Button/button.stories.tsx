import type { Meta, StoryObj } from '@storybook/react';
import button from "./button";
import Button from './button';
import Link from 'next/link';

type T = typeof button;

export default {
    title: 'atoms/button',
    component: button,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  render:() => {
    return (
      <Link href={`post/${[]}`}>
        <Button type='button'>
          more
        </Button>
      </Link>
    )
  }
};

export const SubButton: StoryObj<T> = {
  render:() => {
    return (
      <Button type='submit' onClickFnc={() => alert("Nice!!")}>
        送信
      </Button>
    )
  }
};

import type { Meta, StoryObj } from "@storybook/react";
import button from "./button";

type T = typeof button;

export default {
  title: "atoms/button",
  component: button,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    text:"dammytext",
    color:"primary"
  },
};

export const SecondaryButton: StoryObj<T> = {
    args: {
      text:"dammytext",
      color:"secondary"
    },
  };

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const isPrimary: Story = {
  args: {
    children: "Primary Button",
    variant: "isPrimary",
  },
};

export const isEmpty: Story = {
  args: {
    children: "Empty Button",
    variant: "isEmpty",
  },
};

export const isDanger: Story = {
  args: {
    children: "Danger Button",
    variant: "isDanger",
  },
};

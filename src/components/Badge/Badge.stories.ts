import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "default",
    radius: 4,
    padding: "6px",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Badge",
    variant: "warning",
    radius: 4,
    padding: "6px",
  },
};

export const Success: Story = {
  args: {
    children: "Success Badge",
    variant: "success",
    radius: 4,
    padding: "6px",
  },
};

export const Error: Story = {
  args: {
    children: "Error Badge",
    variant: "error",
    radius: 4,
    padding: "6px",
  },
};

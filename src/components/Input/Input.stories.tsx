import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {
    placeholder: "Normal Input",
    variant: "normal",
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "Underlined Input",
    variant: "underlined",
  },
};

export const Dotted: Story = {
  args: {
    placeholder: "Dotted Input",
    variant: "dotted",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled Input",
    variant: "dotted",
    disabled: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Normal: Story = {
  args: {
    placeholder: "Normal Textarea",
    variant: "normal",
  },
};

export const Dotted: Story = {
  args: {
    placeholder: "Dotted Textarea",
    variant: "dotted",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled Textarea",
    variant: "dotted",
    disabled: true,
  },
};

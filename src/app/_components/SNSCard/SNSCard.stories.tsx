import type { Meta, StoryObj } from "@storybook/react";
import { SNSCard } from "./SNSCard";

const meta: Meta<typeof SNSCard> = {
  title: "components/SNSCard",
  component: SNSCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icon: "https://github.githubassets.com/favicons/favicon.svg",
    name: "GitHub",
    href: "/",
    userName: "username",
  },
};

export default meta;
type Story = StoryObj<typeof SNSCard>;

export const Default: Story = {};

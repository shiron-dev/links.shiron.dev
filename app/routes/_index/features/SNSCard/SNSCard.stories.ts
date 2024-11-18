import type { Meta, StoryObj } from "@storybook/react";

import { createRemixStub } from "@remix-run/testing";
import { SNSCard } from "./SNSCard";

type T = typeof SNSCard;

const meta: Meta = {
  title: "SNS Card",
  component: SNSCard,
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          Component: () => story(),
          path: "/*",
        },
      ]);

      return remixStub({});
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    name: "GitHub",
    userName: "@shiron-dev",
    icon: "/github-mark.svg",
    href: "https://github.com/shiron-dev",
  },
};

export default meta;

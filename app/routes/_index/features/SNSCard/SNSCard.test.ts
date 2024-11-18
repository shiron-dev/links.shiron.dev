// @vitest-environment jsdom

import { composeStories } from "@storybook/react";

import { expect } from "vitest";

import * as stories from "./SNSCard.stories";

const { Default } = composeStories(stories);
it("button snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});

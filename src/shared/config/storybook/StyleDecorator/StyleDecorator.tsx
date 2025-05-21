// .storybook/decorators/StyleDecorator.tsx
import "~app/styles/index.scss"; // Your global SCSS with variables
import { Decorator } from "@storybook/react";

export const StyleDecorator: Decorator = (Story) => Story();

import { muiTheme } from "storybook-addon-material-ui";
import { coreTheme } from "../styles/theme";
import { withNextRouter } from "storybook-addon-next-router";
import { addDecorator } from "@storybook/react";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [muiTheme(coreTheme)];

addDecorator(
  withNextRouter({
    path: "/", // defaults to `/`
    asPath: "/", // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  })
);

import type { Preview } from "@storybook/react";
import "../src/styles/tokens.css";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Foundation",
          [
            "Color",
            "Typography",
            "Spacing",
            "Radius",
            "Iconography",
            "Elevation",
          ],
          "Component",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "app",
      values: [
        { name: "app", value: "#FFFFFF" },
        { name: "gray", value: "#F8F9FB" },
        { name: "dark", value: "#000000" },
      ],
    },
    viewport: {
      viewports: {
        konacard: {
          name: "KONACARD (360×800)",
          styles: { width: "360px", height: "800px" },
          type: "mobile",
        },
      },
    },
  },
};

export default preview;

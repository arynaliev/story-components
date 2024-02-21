/** @type { import('@storybook/react').Preview } */

const newViewport = {
  iPhone14Pro: {
    name: "iPhone 14 Pro",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  iPhone14ProMax: {
    name: "iPhone 14 Pro Max",
    styles: {
      width: "430px",
      height: "932px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...newViewport,
      },
    },
  },
};

export default preview;
